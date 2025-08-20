import { Request, Response } from 'express';
import { MetaDataService } from '../services/MetaData.service.js';
import formatResponse from '../utils/formatResponse.js';

export class MetaDataController {
  static async getAllMetaData(req: Request, res: Response) {
    try {
      const metaData = await MetaDataService.getAllMetaData();
      return res.status(200).json(formatResponse(200, 'Метаданные готовы', metaData));
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json(formatResponse(500, 'Сервер не ответил в getAllMetaData'));
    }
  }

  static async getOneMetaData(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json(formatResponse(400, 'Нет id'));
      }
      if (isNaN(Number(id))) {
        return res.status(400).json(formatResponse(400, 'id не число'));
      }
      const metaData = await MetaDataService.getOneMetaData(Number(id));
      return res.status(200).json(formatResponse(200, 'Метаданные готовы', metaData));
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json(formatResponse(500, 'Сервер не ответил в getOneMetaData'));
    }
  }

  static async updateMetaData(req: Request, res: Response) {
    try {
      const { id, ...updateData } = req.body;
      if (!id) {
        return res.status(400).json({
          success: false,
          message: 'ID метаданных обязателен для обновления',
        });
      }
      const parsedId = Number(id);
      if (isNaN(parsedId)) {
        return res.status(400).json({
          success: false,
          message: 'ID должен быть числом',
        });
      }
      const existingMeta = await MetaDataService.getOneMetaData(parsedId);
      if (!existingMeta) {
        return res.status(404).json({
          success: false,
          message: 'Метаданные с указанным ID не найдены',
        });
      }

      // Явная типизация req.files
      const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;

      const dataImg = {
        ...updateData,
        icons_icon: files?.['icons_icon']?.[0]
          ? `/uploads/${files['icons_icon'][0].filename}`
          : existingMeta.icons_icon,
        icons_shortcut: files?.['icons_shortcut']?.[0]
          ? `/uploads/${files['icons_shortcut'][0].filename}`
          : existingMeta.icons_shortcut,
        icons_apple: files?.['icons_apple']?.[0]
          ? `/uploads/${files['icons_apple'][0].filename}`
          : existingMeta.icons_apple,
      };

      const updatedMeta = await MetaDataService.updateMetaData(parsedId, dataImg);

      return res.status(201).json(formatResponse(201, 'Данные обновлены', updatedMeta));
    } catch (error) {
      console.error('Error in updateMetaData:', error);
      return res
        .status(500)
        .json(formatResponse(500, 'Сервер не ответил в updateMetaData'));
    }
  }
}