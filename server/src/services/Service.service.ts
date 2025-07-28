import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();
const { service } = prisma;

type ServisType = {
  service: string;
  description: string;
  images: string;
};

export class ServiceService {
  static async getAllService() {
    return service.findMany();
  }

  static async getOneService(id: number) {
    return service.findUnique({
      where: {
        id,
      },
    });
  }

  static async updateService(id: number, data: ServisType) {
    return service.update({
      where: { id },
      data,
    });
  }

  static async deleteService(id: number) {
    return await service.delete({
      where: { id },
    });
  }

  static async createService(data: ServisType) {
    const newService = await service.create({ data });
    return newService;
  }

  static async updateServiceImage(id: number, imagePath: string) {
    return service.update({
      where: { id },
      data: { images: imagePath },
    });
  }
}
