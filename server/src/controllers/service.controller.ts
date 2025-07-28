import { Request, Response } from 'express';
import formatResponse from '../utils/formatResponse.js';
import { ServiceService } from '../services/Service.service.js';

export class ServiceController {
  static async getAllServices(req: Request, res: Response) {
    try {
      const services = await ServiceService.getAllService();
      res.status(200).json(formatResponse(200, 'Услуги получены', services));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Ошибка сервера'));
    }
  }

  static async getOneService(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const service = await ServiceService.getOneService(Number(id));
      res.status(200).json(formatResponse(200, 'Услуга получена', service));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Ошибка сервера'));
    }
  }

  static async createService(req: Request, res: Response) {
    try {
      const newService = await ServiceService.createService(req.body);
      res.status(201).json(formatResponse(201, 'Услуга создана', newService));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Ошибка сервера'));
    }
  }

  static async updateService(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updatedService = await ServiceService.updateService(Number(id), req.body);
      res.status(200).json(formatResponse(200, 'Услуга обновлена', updatedService));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Ошибка сервера'));
    }
  }

  static async deleteService(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await ServiceService.deleteService(Number(id));
      res.status(200).json(formatResponse(200, 'Услуга удалена'));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Ошибка сервера'));
    }
  }

  static async uploadServiceImage(req: Request, res: Response) {
    try {
      const { id } = req.params;
      // Логика загрузки изображения
      res.status(200).json(formatResponse(200, 'Изображение загружено'));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Ошибка загрузки изображения'));
    }
  }

  static async deleteServiceImage(req: Request, res: Response) {
    try {
      const { id } = req.params;
      // Логика удаления изображения
      res.status(200).json(formatResponse(200, 'Изображение удалено'));
    } catch (error) {
      res.status(500).json(formatResponse(500, 'Ошибка удаления изображения'));
    }
  }
}
