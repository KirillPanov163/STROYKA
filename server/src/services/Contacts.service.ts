import { PrismaClient } from '../generated/prisma/index.js';
const prisma = new PrismaClient();

export class ContactsService {
  static async createContact(data: {
    email?: string;
    tel?: string;
    address?: string;
    whatsapp?: string;
    telegram?: string;
  }) {
    const contact = await prisma.cONTACTS.create({
      data: {
        email: data.email,
        tel: data.tel,
        address: data.address,
        whatsapp: data.whatsapp,
        telegram: data.telegram,
      },
    });
    return contact;
  }
  static async getAllContacts() {
    const contacts = await prisma.cONTACTS.findMany();
    return contacts;
  }

  static async getContactById(id: number) {
    const contact = await prisma.cONTACTS.findUnique({
      where: { Id: id },
    });
    return contact;
  }

  static async updateContact(
    id: number,
    data: {
      email?: string;
      tel?: string;
      address?: string;
      whatsapp?: string;
      telegram?: string;
    },
  ) {
    const contact = await prisma.cONTACTS.update({
      where: { Id: id },
      data: {
        email: data.email,
        tel: data.tel,
        address: data.address,
        whatsapp: data.whatsapp,
        telegram: data.telegram,
      },
    });
    return contact;
  }

  static async deleteContact(id: number) {
    const contact = await prisma.cONTACTS.delete({
      where: { Id: id },
    });
    return contact;
  }
}
