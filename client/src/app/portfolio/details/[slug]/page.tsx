export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import WorkDetailsPage from './ClientPage';
import { notFound } from 'next/navigation';
import { reverseTransliterate } from '@/entities/Translater';

async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const res = await fetch(`http://server:3001/api/metadata`);
    const id = params.slug.split('-')[1];
    const slug = params.slug.split('-')[0];

    if (!id || isNaN(Number(id))) return notFound();

    const data = await fetch(`http://server:3001/api/my-work/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const metaDatas = await res.json();
    const meta = metaDatas.data?.[4];

    return {
      title: `${meta?.title} | ${reverseTransliterate(slug)}`,
      description: meta?.description,
      keywords: meta?.keywords.split(',').join(', '),
      authors: {
        name: 'Колчин Александр, Садиков Денис, Азамат Болатчиев, Кирилл Панов, Николай Володин, Владислав Бурихин',
      },
      openGraph: {
        title: meta?.openGraph_title || meta?.title,
        description: meta?.openGraph_description || meta?.description,
        url: meta?.openGraph_url || '',
        siteName: meta?.openGraph_siteName,
        locale: 'ru_RU',
        type: 'website',
      },
      icons: {
        icon: meta?.icons_icon,
        shortcut: meta?.icons_shortcut,
        apple: meta?.icons_apple,
      },
      other: {
        'geo.region': meta?.other_geo_region,
        'geo.placename': meta?.other_geo_placename,
        'geo.position': meta?.other_geo_position,
        ICBM: meta?.other_ICBM,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'ВашКомфорт',
      description: '',
    };
  }
}

export default function WorkDetails() {
  return <WorkDetailsPage />;
}
