import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadsDir = path.join(__dirname, '../../public/uploads');

export class ServiceService {
  static async getAllService() {
    return await prisma.service.findMany();
  }

  static async getOneService(id: number) {
    return await prisma.service.findUnique({ where: { id } });
  }

  static async createService(data: any) {
    return await prisma.service.create({
      data: {
        service: data.service,
        description: data.description,
        images: data.imagesPath || null, // Make sure this matches what you send from controller
      },
    });
  }

  static async updateService(id: number, data: any) {
    const currentService = await prisma.service.findUnique({ where: { id } });

    if (data.newImage && currentService?.images) {
      this.deleteImage(currentService.images);
    }

    return await prisma.service.update({
      where: { id },
      data: {
        service: data.service,
        description: data.description,
        images: data.newImage || currentService?.images,
      },
    });
  }

  static async deleteService(id: number) {
    const service = await prisma.service.findUnique({ where: { id } });
    if (!service) throw new Error('Service not found');

    if (service.images) {
      this.deleteImage(service.images);
    }

    return await prisma.service.delete({ where: { id } });
  }

  private static deleteImage(imagePath: string) {
    const fullPath = path.join(uploadsDir, path.basename(imagePath));
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }
  }
}
