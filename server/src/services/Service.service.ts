import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();
const { service } = prisma;

type ServisType = {
  service: string;
  description: string;
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

  static async createService(data: { service: string; description: string }) {
    const newService = await service.create({
      data: {
        service: data.service,
        description: data.description,
      },
    });
    return newService;
  }
}
