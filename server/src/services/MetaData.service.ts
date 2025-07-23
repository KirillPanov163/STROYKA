import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export type MetaData = {
  title?: string | null;
  description?: string | null;
  keywords?: string | null;
  author_name?: string | null;
  nataliaBase?: string | null;
  alternates?: string | null;
  openGraph_title?: string | null;
  openGraph_description?: string | null;
  openGraph_url?: string | null;
  openGraph_siteName?: string | null;
  themeColor?: string | null;
  icons_icon?: string | null;
  icons_shortcut?: string | null;
  icons_apple?: string | null;
  other_geo_region?: string | null;
  other_geo_placename?: string | null;
  other_geo_position?: string | null;
  other_ICBM?: string | null;
};

export class MetaDataService {
  static async getAllMetaData() {
    return prisma.meta_data.findMany();
  }

  static async getOneMetaData(id: number) {
    return prisma.meta_data.findUnique({
      where: {
        id,
      },
    });
  }

  static async updateMetaData(
    id: number,
    data: MetaData,
  ) {
    return prisma.meta_data.update({
      where: { id },
      data,
    });
  }
}
