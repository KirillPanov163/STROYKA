import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Настройка хранилища для Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../../../client/public/uploads');
    // Создаем папку, если она не существует
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, 'work-' + uniqueSuffix + path.extname(file.originalname));
  },
});

// Фильтр для проверки типа файла
const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Неверный тип файла. Разрешены только изображения.'), false);
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // Ограничение 5MB
  },
});

export class MyWorkService {
  static async createMyWork(data: any) {
    // Обработка загруженного файла
    const imagePath = data.image ? `/uploads/${data.image.filename}` : null;

    const myWork = await prisma.my_work.create({
      data: {
        title: data.title,
        square: data.square,
        quantity: data.quantity,
        time: data.time,
        success_work: data.success_work,
        image: imagePath,
      },
    });
    return myWork;
  }

  static async getAllMyWorks() {
    const myWorks = await prisma.my_work.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return myWorks;
  }

  static async getMyWorkById(id: number) {
    const myWork = await prisma.my_work.findUnique({
      where: { id },
    });
    return myWork;
  }

  static async updateMyWork(id: number, data: any, oldImagePath?: string) {
    // Удаляем старое изображение, если загружено новое
    if (data.image && oldImagePath) {
      const oldImageFullPath = path.join(
        __dirname,
        '../../../client/public',
        oldImagePath,
      );
      if (fs.existsSync(oldImageFullPath)) {
        fs.unlinkSync(oldImageFullPath);
      }
    }

    const imagePath = data.image ? `/uploads/${data.image.filename}` : oldImagePath;

    const myWork = await prisma.my_work.update({
      where: { id },
      data: {
        title: data.title,
        square: data.square,
        quantity: data.quantity,
        time: data.time,
        success_work: data.success_work,
        image: imagePath,
      },
    });
    return myWork;
  }

  static async deleteMyWork(id: number) {
    // Сначала получаем работу, чтобы удалить связанное изображение
    const work = await prisma.my_work.findUnique({
      where: { id },
    });

    if (!work) {
      throw new Error('Работа не найдена');
    }

    // Удаляем изображение, если оно есть
    if (work.image) {
      const imagePath = path.join(__dirname, '../../../client/public', work.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // Удаляем запись из БД
    const deletedWork = await prisma.my_work.delete({
      where: { id },
    });
    return deletedWork;
  }
}
