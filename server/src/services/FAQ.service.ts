import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

export class FAQService {
  static async createFAQ(data: {
    question?: string;
    answers?: string;
  }) {
    const faq = await prisma.faq.create({
      data: {
        question: data.question,
        answers: data.answers,
      },
    });
    return faq;
  }

  static async getAllFAQs() {
    const faqs = await prisma.faq.findMany();
    return faqs;
  }

  static async getFAQById(id: number) {
    const faq = await prisma.faq.findUnique({
      where: { id },
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
    const faq = await prisma.faq.update({
      where: { id },
      data: {
        question: data.question,
        answers: data.answers,
      },
    });
    return faq;
  }

  static async deleteFAQ(id: number) {
    const faq = await prisma.faq.delete({
      where: { id },
    });
    return faq;
  }
}