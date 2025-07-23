import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

export class FAQService {
  static async createFAQ(data: {
    question?: string;
    answers?: string;
  }) {
    const faq = await prisma.fAQ.create({
      data: {
        question: data.question,
        answers: data.answers,
      },
    });
    return faq;
  }

  static async getAllFAQs() {
    const faqs = await prisma.fAQ.findMany();
    return faqs;
  }

  static async getFAQById(id: number) {
    const faq = await prisma.fAQ.findUnique({
      where: { Id: id },
    });
    return faq;
  }

  static async updateFAQ(
    id: number,
    data: {
      question?: string;
      answers?: string;
    },
  ) {
    const faq = await prisma.fAQ.update({
      where: { Id: id },
      data: {
        question: data.question,
        answers: data.answers,
      },
    });
    return faq;
  }

  static async deleteFAQ(id: number) {
    const faq = await prisma.fAQ.delete({
      where: { Id: id },
    });
    return faq;
  }
}