import { Request, Response } from 'express';
import { MyWorkService } from '../services/MyWork.service.js';
import formatResponse from '../utils/formatResponse.js';

export class MyWorkController {
  static async createMyWork(req: Request, res: Response): Promise<void> {
    try {
      const workData = {
        ...req.body,
        image: req.file ? `/uploads/${req.file.filename}` : null,
      };

      console.log(req.file)

      const result = await MyWorkService.createMyWork(workData);
      res.status(201).json(formatResponse(201, 'Work created', result));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Server error'));
    }
  }

  static async updateMyWork(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        res.status(400).json(formatResponse(400, 'Invalid ID'));
        return;
      }

      console.log(req.file)
      console.log(req.body)

      const workData = {
        ...req.body,
        newImage: req.file ? `/uploads/${req.file.filename}` : undefined,
      };

      const result = await MyWorkService.updateMyWork(id, workData);
      res.status(200).json(formatResponse(200, 'Work updated', result));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Server error'));
    }
  }

  static async getAllMyWorks(req: Request, res: Response) {
    try {
      const result = await MyWorkService.getAllMyWorks();
      res.status(200).json(formatResponse(200, 'Работы успешно получены', result));
    } catch (error) {
      console.error(error);
      res.status(500).json(formatResponse(500, 'Внутренняя ошибка сервера'));
    }
  }

  static async getMyWorkById(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      if (isNaN(id)) {
        res.status(400).json(formatResponse(400, 'Некорректный ID работы'));
        return;
      }

      const result = await MyWorkService.getMyWorkById(id);
      if (!result) {
        res.status(404).json(formatResponse(404, 'Работа не найдена'));
        return;
      }
      res.status(200).json(formatResponse(200, 'Работа успешно получена', result));
    } catch (error) {
      console.error(error);
      res.status(500).json(formatResponse(500, 'Внутренняя ошибка сервера'));
    }
  }

  static async deleteMyWork(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      if (isNaN(id)) {
        res.status(400).json(formatResponse(400, 'Некорректный ID работы'));
        return;
      }

      await MyWorkService.deleteMyWork(id);
      res.status(200).json(formatResponse(200, 'Работа успешно удалена'));
    } catch (error) {
      console.error(error);
      res.status(500).json(formatResponse(500, 'Внутренняя ошибка сервера'));
    }
  }
}
