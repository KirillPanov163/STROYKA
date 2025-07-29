import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Общие настройки для загрузки изображений
const uploadsDir = path.join(__dirname, '../../../client/public/uploads');

// Создаем папку для загрузок, если ее нет
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, 'work-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

export class MyWorkService {
  static upload: any;
  static async createMyWork(data: any) {
    // теперь data.image — это сразу строка '/uploads/...'
    const imagePath: string | null = data.image || null;

    return await prisma.my_work.create({
      data: {
        title: data.title,
        square: data.square,
        quantity: data.quantity,
        time: data.time,
        success_work: data.success_work,
        image: imagePath,
      },
    });
  }

  static async getAllMyWorks() {
    return await prisma.my_work.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  static async getMyWorkById(id: number) {
    return await prisma.my_work.findUnique({ where: { id } });
  }

  static async updateMyWork(id: number, data: any) {
    const currentWork = await prisma.my_work.findUnique({ where: { id } });
    // Если пришла новая строка-путь, удаляем старый файл
    if (data.newImage && currentWork?.image) {
      const oldImagePath = path.join(uploadsDir, path.basename(currentWork.image));
      if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
    }
    // data.newImage — это '/uploads/имя_файла', либо undefined
    const imagePath = data.newImage ?? currentWork?.image ?? null;
    return prisma.my_work.update({
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
  }

  static async deleteMyWork(id: number) {
    const work = await prisma.my_work.findUnique({ where: { id } });
    if (!work) throw new Error('Work not found');

    // Удаляем изображение если оно есть
    if (work.image) {
      const imagePath = path.join(uploadsDir, path.basename(work.image));
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    return await prisma.my_work.delete({ where: { id } });
  }
}
