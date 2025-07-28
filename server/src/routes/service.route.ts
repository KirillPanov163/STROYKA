import { Router } from 'express';
import { ServiceController } from '../controllers/service.controller.js';

const serviceRouter = Router();

// Получение всех услуг
serviceRouter.get('/', (req, res) => ServiceController.getAllServices(req, res));

// Получение одной услуги
serviceRouter.get('/:id', (req, res) => ServiceController.getOneService(req, res));

// Создание услуги
serviceRouter.post('/', (req, res) => ServiceController.createService(req, res));

// Обновление услуги
serviceRouter.put('/:id', (req, res) => ServiceController.updateService(req, res));

// Удаление услуги
serviceRouter.delete('/:id', (req, res) => ServiceController.deleteService(req, res));

// Загрузка изображения
serviceRouter.post('/:id/upload-image', (req, res) =>
  ServiceController.uploadServiceImage(req, res),
);

// Удаление изображения
serviceRouter.delete('/:id/delete-image', (req, res) =>
  ServiceController.deleteServiceImage(req, res),
);

export default serviceRouter;
