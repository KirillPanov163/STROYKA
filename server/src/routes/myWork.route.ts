import { Router } from 'express';
import { MyWorkController } from '../controllers/MyWork.controller.js';
import { upload } from '../services/MyWork.service.js';
import multer from 'multer';

const myWorkRouter = Router();

// Добавляем middleware для загрузки файлов
myWorkRouter.post('/', upload.single('image'), async (req, res) => {
  await MyWorkController.createMyWork(req, res);
});

myWorkRouter.get('/', async (req, res) => {
  await MyWorkController.getAllMyWorks(req, res);
});

myWorkRouter.get('/:id', async (req, res) => {
  await MyWorkController.getMyWorkById(req, res);
});

myWorkRouter.put('/:id', upload.single('image'), async (req, res) => {
  await MyWorkController.updateMyWork(req, res);
});

myWorkRouter.delete('/:id', async (req, res) => {
  await MyWorkController.deleteMyWork(req, res);
});

// Обработчик ошибок Multer
myWorkRouter.use((err: any, req: any, res: any, next: any) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({
      status: 400,
      message: 'Ошибка загрузки файла',
      error: err.message,
    });
  } else if (err) {
    return res.status(500).json({
      status: 500,
      message: 'Внутренняя ошибка сервера',
      error: err.message,
    });
  }
  next();
});

export default myWorkRouter;
