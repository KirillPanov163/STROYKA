import { Request, Response } from 'express';
import { MyWorkService } from '../services/MyWork.service.js';
import formatResponse from '../utils/formatResponse.js';

export class MyWorkController {
  static async createMyWork(req: Request, res: Response) {
    try {
      const workData = {
        ...req.body,
        image: req.file, // Добавляем загруженный файл
      };
      const result = await MyWorkService.createMyWork(workData);
      res.status(201).json(formatResponse(201, 'Работа успешно создана', result));
    } catch (error) {
      console.error(error);
      res.status(500).json(formatResponse(500, 'Внутренняя ошибка сервера'));
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

  static async updateMyWork(req: Request, res: Response) {
    try {
      const id = +req.params.id;
      if (isNaN(id)) {
        res.status(400).json(formatResponse(400, 'Некорректный ID работы'));
        return;
      }

      const oldWork = await MyWorkService.getMyWorkById(id);
      const workData = {
        ...req.body,
        image: req.file, // Добавляем загруженный файл
      };

      const result = await MyWorkService.updateMyWork(
        id,
        workData,
        oldWork?.image || undefined,
      );
      res.status(200).json(formatResponse(200, 'Работа успешно обновлена', result));
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
