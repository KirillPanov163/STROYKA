export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './globals.css';
import Navigation from '../widgets/Navigation/Navigation';
import Footer from '../widgets/Footer/Footer';

import { ClientLayoutWrapper } from './ClientLayoutWrapper';
import ServicesList from '@/entities/service/ui/ServiceList';
import { Providers } from '@/store/providers';

// import { Providers } from '@/store/providers';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/metaData`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const metaDatas = await res.json();
    const meta = metaDatas.data?.[0] || {};

    // Safe parsing of keywords
    let keywords = '';
    try {
      const rowKeyWords = meta?.keywords || '[]';
      const arr = JSON.parse(rowKeyWords);
      keywords = Array.isArray(arr) ? arr.join(', ') : '';
    } catch (e) {
      console.error('Error parsing keywords:', e);
    }

    return {
      title: meta?.title,
      description: meta?.description,
      keywords: keywords,
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let services = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service`, {
      cache: 'no-store',
    });

    if (res.ok) {
      const data = await res.json();
      services = data.data || [];
      console.log('Fetched services:', services);
    }
  } catch (error) {
    console.error('Error fetching services:', error);
  }

  return (
    <html lang="ru">
      <body className="flex flex-col min-h-screen">
        <Providers>
          <Navigation />
          <main className="flex-1">
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
