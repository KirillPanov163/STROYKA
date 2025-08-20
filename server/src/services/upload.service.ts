import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Request } from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadsDir = path.join(__dirname, '..', '..', 'public', 'uploads');

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, uniqueName);
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Для загрузки одного файла
export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// Для загрузки нескольких полей
export const uploads = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024, files: 20 },
});

// Утилита для получения списка файлов и их использования
export const getImageListWithUsage = async () => {
  try {
    const files = fs.readdirSync(uploadsDir);

    const usageMap = new Map();

    // Проверка использования в таблице Service
    const services = await prisma.service.findMany({
      where: { image: { not: null } },
    });
    services.forEach((service) => {
      if (service.image) {
        const filename = path.basename(service.image);
        if (files.includes(filename)) {
          usageMap.set(filename, [...(usageMap.get(filename) || []), 'Service']);
        }
      }
    });

    // Проверка использования в таблице My_work
    const myWorks = await prisma.my_work.findMany({
      where: { image: { not: null } },
    });
    myWorks.forEach((work) => {
      if (work.image !== null) {
        if (work.image) {
          const images = JSON.parse(work.image);
          images.forEach((image: string) => {
            const filename = path.basename(image);
            if (files.includes(filename)) {
              usageMap.set(filename, [...(usageMap.get(filename) || []), 'My_work']);
            }
          });
        }
      }
    });

    // Проверка использования в таблице Meta_data
    const metaData = await prisma.meta_data.findMany({
      where: {
        OR: [
          { icons_icon: { not: null } },
          { icons_shortcut: { not: null } },
          { icons_apple: { not: null } },
        ],
      },
    });
    metaData.forEach((meta) => {
      if (meta.icons_icon) {
        const filename = path.basename(meta.icons_icon);
        if (files.includes(filename)) {
          usageMap.set(filename, [...(usageMap.get(filename) || []), 'Meta_data']);
        }
      }
      if (meta.icons_shortcut) {
        const filename = path.basename(meta.icons_shortcut);
        if (files.includes(filename)) {
          usageMap.set(filename, [...(usageMap.get(filename) || []), 'Meta_data']);
        }
      }
      if (meta.icons_apple) {
        const filename = path.basename(meta.icons_apple);
        if (files.includes(filename)) {
          usageMap.set(filename, [...(usageMap.get(filename) || []), 'Meta_data']);
        }
      }
    });

    // Формирование результата
    return files.map((file) => ({
      filename: file,
      usedIn: usageMap.get(file) || [],
      url: `http://localhost:3001/uploads/${file}`,
    }));
  } catch (error) {
    console.error('Error reading uploads directory or querying database:', error);
    return [];
  }
};

// Утилита для удаления файла
export const deleteImage = (filename: string) => {
  const filePath = path.join(uploadsDir, filename);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    return true;
  }
  return false;
};
