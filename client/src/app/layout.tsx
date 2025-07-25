// client/src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navigation from '../widgets/Navigation/Navigation';
import Footer from '../widgets/Footer/Footer';
import { Providers } from '@/store/Providers';

export async function generateMetadata(): Promise<Metadata> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/metaData`, {
    cache: 'no-store',
  });
  const metaDatas = await res.json();

  const meta = metaDatas.data[0];
  const rowKeyWords = meta?.keywords;
  const arr = JSON.parse(rowKeyWords);
  const keywords = arr.join(', ');
  console.log(keywords);
  console.log(meta);

  return {
    title: meta?.title || 'ВашКомфорт',
    description: meta?.description || '',
    keywords: keywords || '',
    authors: {
      name: 'Колчин Александр, Садиков Денис, Азамат Болатчиев, Кирилл, Николай Володин, Владислав Бурихин',
    },
    openGraph: {
      title: meta?.openGraph_title || meta?.title,
      description: meta?.openGraph_description || meta?.description,
      url: meta?.openGraph_url,
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
      'ICBM': meta?.other_ICBM,
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <Navigation />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
