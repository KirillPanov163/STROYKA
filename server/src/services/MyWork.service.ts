import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

export class MyWorkService {
  static async createMyWork(data: {
    title?: string;
    square?: string;
    quantity?: string;
    time?: string;
    success_work?: string;
    image?: string;
  }) {
    const myWork = await prisma.my_work.create({
      data: {
        title: data.title,
        square: data.square,
        quantity: data.quantity,
        time: data.time,
        success_work: data.success_work,
        image: data.image,
      },
    });
    return myWork;
  }

  static async getAllMyWorks() {
    const myWorks = await prisma.my_work.findMany();
    return myWorks;
  }

  static async getMyWorkById(id: number) {
    const myWork = await prisma.my_work.findUnique({
      where: { id },
    });
    return myWork;
  }

  static async updateMyWork(
    id: number,
    data: {
      title?: string;
      square?: string;
      quantity?: string;
      time?: string;
      success_work?: string;
      image?: string;
    },
  ) {
    const myWork = await prisma.my_work.update({
      where: { id },
      data: {
        title: data.title,
        square: data.square,
        quantity: data.quantity,
        time: data.time,
        success_work: data.success_work,
        image: data.image,
      },
    });
    return myWork;
  }

  static async deleteMyWork(id: number) {
    const myWork = await prisma.my_work.delete({
      where: { id },
    });
    return myWork;
  }
}
