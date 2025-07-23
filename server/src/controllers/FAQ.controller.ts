import { Request, Response } from 'express';
import { FAQService } from '../services/FAQ.service.js';
import formatResponse from '../utils/formatResponse.js';

export class FAQController {
  static async createFAQ(req: Request, res: Response) {
    try {
      const result = await FAQService.createFAQ(req.body);
      res.status(201).json(formatResponse(201, 'FAQ успешно создан', result));
    } catch (error) {
      console.error(error);
      res.status(500).json(formatResponse(500, 'Внутренняя ошибка сервера'));
    }
  }

  static async getAllFAQs(req: Request, res: Response) {
    try {
      const result = await FAQService.getAllFAQs();
      res.status(200).json(formatResponse(200, 'FAQs успешно получены', result));
    } catch (error) {
      console.error(error);
      res.status(500).json(formatResponse(500, 'Внутренняя ошибка сервера'));
    }
  }

  static async getFAQById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json(formatResponse(400, 'Некорректный ID FAQ'));
        return;
      }

      const result = await FAQService.getFAQById(id);
      if (!result) {
        res.status(404).json(formatResponse(404, 'FAQ не найден'));
        return;
      }
      res.status(200).json(formatResponse(200, 'FAQ успешно получен', result));
    } catch (error) {
      console.error(error);
      res.status(500).json(formatResponse(500, 'Внутренняя ошибка сервера'));
    }
  }

  static async updateFAQ(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json(formatResponse(400, 'Некорректный ID FAQ'));
        return;
      }

      const result = await FAQService.updateFAQ(id, req.body);
      res.status(200).json(formatResponse(200, 'FAQ успешно обновлён', result));
    } catch (error) {
      console.error(error);
      res.status(500).json(formatResponse(500, 'Внутренняя ошибка сервера'));
    }
  }

  static async deleteFAQ(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        res.status(400).json(formatResponse(400, 'Некорректный ID FAQ'));
        return;
      }

      await FAQService.deleteFAQ(id);
      res.status(200).json(formatResponse(200, 'FAQ успешно удалён'));
    } catch (error) {
      console.error(error);
      res.status(500).json(formatResponse(500, 'Внутренняя ошибка сервера'));
    }
  }
}