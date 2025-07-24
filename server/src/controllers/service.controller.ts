import type { Request, Response } from 'express';
import { ServiceService } from '../services/Service.service.js';
import formatResponse from '../utils/formatResponse.js';

type ServisType = {
  service: string;
  description: string;
  images: string
};

export class ServiceController {
  static async getAllServices(req: Request, res: Response) {
    try {
      const services = await ServiceService.getAllService();
      return res
        .status(200)
        .json(formatResponse(200, 'Список сервисов получен', services));
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json(formatResponse(500, 'Ошибка сервера при получении списка сервисов'));
    }
  }

  static async getOneService(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json(formatResponse(400, 'ID сервиса обязателен'));
      }

      const parsedId = Number(id);
      if (isNaN(parsedId)) {
        return res.status(400).json(formatResponse(400, 'ID должен быть числом'));
      }

      const service = await ServiceService.getOneService(parsedId);

      if (!service) {
        return res.status(404).json(formatResponse(404, 'Сервис не найден'));
      }
      return res
        .status(200)
        .json(formatResponse(200, 'Данные сервиса получены', service));
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json(formatResponse(500, 'Ошибка сервера при получении сервиса'));
    }
  }

  static async createService(req: Request, res: Response) {
    try {
      const { service, description, images } = req.body;

      if (!service || !description || !images) {
        return res
          .status(400)
          .json(formatResponse(400, 'Название и описание сервиса обязательны'));
      }
      const data: ServisType = { service, description, images };
      const newService = await ServiceService.createService(data);

      return res
        .status(201)
        .json(formatResponse(201, 'Сервис успешно создан', newService));
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json(formatResponse(500, 'Ошибка сервера при создании сервиса'));
    }
  }

  static async updateService(req: Request, res: Response) {
    try {
      const { id, ...updateData } = req.body;

      if (!id) {
        return res.status(400).json(formatResponse(400, 'ID сервиса обязателен'));
      }

      const parsedId = Number(id);
      if (isNaN(parsedId)) {
        return res.status(400).json(formatResponse(400, 'ID должен быть числом'));
      }

      const existingService = await ServiceService.getOneService(parsedId);
      if (!existingService) {
        return res.status(404).json(formatResponse(404, 'Сервис не найден'));
      }

      const updatedService = await ServiceService.updateService(parsedId, updateData);

      return res
        .status(200)
        .json(formatResponse(200, 'Сервис успешно обновлен', updatedService));
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json(formatResponse(500, 'Ошибка сервера при обновлении сервиса'));
    }
  }

  static async deleteService(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json(formatResponse(400, 'ID сервиса обязателен'));
      }

      const parsedId = Number(id);
      if (isNaN(parsedId)) {
        return res.status(400).json(formatResponse(400, 'ID должен быть числом'));
      }
      const existingService = await ServiceService.getOneService(parsedId);
      if (!existingService) {
        return res.status(404).json(formatResponse(404, 'Сервис не найден'));
      }

      await ServiceService.deleteService(parsedId);

      return res.status(200).json(formatResponse(200, 'Сервис успешно удален', existingService));
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json(formatResponse(500, 'Ошибка сервера при удалении сервиса'));
    }
  }
}
