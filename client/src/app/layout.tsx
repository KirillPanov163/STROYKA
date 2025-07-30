export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './globals.css';
import Navigation from '../widgets/Navigation/Navigation';
import Footer from '../widgets/Footer/Footer';

import { ClientLayoutWrapper } from './ClientLayoutWrapper';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/metaData`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const metaDatas = await res.json();
    const meta = metaDatas.data?.[0];
    // Provide a default URL if NEXT_PUBLIC_SITE_URL is not set
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://вашкомфорт.рф';
    const currentYear = new Date().getFullYear();

    return {
      title: meta?.title || 'ВашКомфорт',
      description: meta?.description || 'Профессиональные услуги по ремонту и отделке помещений',
      keywords: meta?.keywords?.split(',').join(', ') || 'ремонт, отделка, строительство, дизайн интерьера',
      metadataBase: new URL(siteUrl),
      alternates: {
        canonical: siteUrl,
      },
      authors: [
        { name: 'Колчин Александр, Садиков Денис, Азамат Болатчиев, Кирилл Панов, Николай Володин, Владислав Бурихин' },
        { name: 'ВашКомфорт', url: siteUrl }
      ],
      creator: 'Команда ВашКомфорт',
      publisher: 'ВашКомфорт',
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      openGraph: {
        title: meta?.openGraph_title || meta?.title || 'ВашКомфорт',
        description: meta?.openGraph_description || meta?.description || 'Профессиональные услуги по ремонту и отделке помещений',
        url: meta?.openGraph_url || siteUrl,
        siteName: meta?.openGraph_siteName || 'ВашКомфорт',
        locale: 'ru_RU',
        type: 'website',
        images: [
          {
            url: meta?.openGraph_image || `${siteUrl}/images/og-image.jpg`,
            width: 1200,
            height: 630,
            alt: meta?.openGraph_title || 'ВашКомфорт',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: meta?.openGraph_title || meta?.title || 'ВашКомфорт',
        description: meta?.openGraph_description || meta?.description || 'Профессиональные услуги по ремонту и отделке помещений',
        images: [meta?.openGraph_image || `${siteUrl}/images/og-image.jpg`],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      icons: {
        icon: [
          { url: meta?.icons_icon || '/favicon.ico' },
          new URL(meta?.icons_icon || '/favicon.ico', siteUrl),
        ],
        shortcut: [meta?.icons_shortcut || '/favicon.ico'],
        apple: [
          { url: meta?.icons_apple || '/apple-touch-icon.png' },
          { url: meta?.icons_apple || '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
          {
            rel: 'mask-icon',
            url: '/safari-pinned-tab.svg',
            color: '#5bbad5',
          },
        ],
      },
      manifest: '/site.webmanifest',
      themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#1f2937' },
      ],
      appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: meta?.title || 'ВашКомфорт',
      },
      other: {
        'application-name': 'ВашКомфорт',
        'msapplication-TileColor': '#da532c',
        'msapplication-config': '/browserconfig.xml',
        'theme-color': '#ffffff',
        'copyright': `© ${currentYear} ВашКомфорт. Все права защищены.`,
        'geo.region': meta?.other_geo_region || 'RU',
        'geo.placename': meta?.other_geo_placename || 'Москва',
        'geo.position': meta?.other_geo_position || '55.7558,37.6173',
        'ICBM': meta?.other_ICBM || '55.7558, 37.6173',
        'yandex-verification': meta?.yandex_verification || '',
        'google-site-verification': meta?.google_verification || '',
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

import { ThemeProvider } from '@/contexts/ThemeContext';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import { Providers } from '@/store/providers';

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
    <html lang="ru" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200 relative">
        <Providers>
          <ThemeProvider>
            <ThemeToggle />
            <Navigation />
            <main className="flex-1 relative z-0">
              <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
            </main>
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
