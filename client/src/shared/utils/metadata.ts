import { Metadata } from 'next';

// Map of page paths to their corresponding metadata indices
const PAGE_INDICES: Record<string, number> = {
  '/': 0, // Главная
  '/services': 2, // Услуги
  '/portfolio': 1, // Мои работы главная
  '/portfolio/all-works': 3, // Мои работы все работы
  '/portfolio/details/[slug]': 4, // Мои работы отдельная работа
  '/contacts': 5, // Контакты
};

export async function generatePageMetadata(pagePath: string = '/'): Promise<Metadata> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/metadata`);
    // const res = await fetch(`http://server:3001/api/metadata`);

    const metaDatas = await res.json();
    const index = PAGE_INDICES[pagePath] ?? 0;
    const meta = metaDatas.data?.[index];

    if (!meta) {
      throw new Error('No metadata found');
    }

    const pageTitle = meta.title;
    const pageDescription = meta.description;

    return {
      title: pageTitle,
      description: pageDescription,
      keywords: meta.keywords?.split(',').join(', '),
      authors: {
        name: meta.author_name || 'Колчин Александр, Садиков Денис, Азамат Болатчиев, Кирилл Панов, Николай Володин, Владислав Бурихин',
      },
      openGraph: {
        title: meta.openGraph_title || pageTitle,
        description: meta.openGraph_description || pageDescription,
        url: meta.openGraph_url || '',
        siteName: meta.openGraph_siteName,
        locale: 'ru_RU',
        type: 'website',
      },
      icons: {
        icon: meta.icons_icon,
        shortcut: meta.icons_shortcut,
        apple: meta.icons_apple,
      },
      other: {
        'geo.region': meta.other_geo_region,
        'geo.placename': meta.other_geo_placename,
        'geo.position': meta.other_geo_position,
        'ICBM': meta.other_ICBM,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'ВентСтройМонтаж',
      description: 'Ваш надежный партнер в создании комфортного микроклимата',
    };
  }
}
