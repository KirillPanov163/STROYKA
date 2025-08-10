export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import './components/styles/globals.css';
import Header from './components/contexts/Header/Header';
import Footer from './components/contexts/Footer/Footer';
import { ClientLayoutWrapper } from './components/contexts/LayoutContext/ClientLayoutWrapper';
import { ThemeProvider } from '@/app/components/contexts/LayoutContext/theme/ThemeContext';
import { ThemeToggle } from '@/app/components/contexts/LayoutContext/theme/ThemeToggle/ThemeToggle';
import { Providers } from '@/app/components/contexts/LayoutContext/store/Providers';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

// Новый экспорт viewport
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1f2937' },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/metadata`, {
      next: { revalidate: 3600 },
    });

    // const res = await fetch(`http://server:3001/api/metadata`, {
    //   next: { revalidate: 3600 },
    // });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const metaDatas = await res.json();
    const meta = metaDatas.data?.[0];
    const siteUrl = process.env.NEXT_PUBLIC_API_URL || 'https://vsmtech.ru/';
    const currentYear = new Date().getFullYear();

    return {
      title: 'ВентСтройМонтаж | Профессиональный монтаж вентиляции и кондиционеров ',
      description:
        'Установка и обслуживание систем вентиляции, кондиционирования и очистки воздуха в Москве и области. Гарантия качества, индивидуальные решения.',
      keywords:
        meta?.keywords?.split(',').join(', ') ||
        'ремонт, отделка, строительство, дизайн интерьера',
      metadataBase: new URL(siteUrl),
      alternates: {
        canonical: siteUrl,
      },
      authors: [
        {
          name: 'Колчин Александр, Садиков Денис, Азамат Болатчиев, Кирилл Панов, Николай Володин, Владислав Бурихин',
        },
        { name: 'ВентСтройМонтаж', url: siteUrl },
      ],
      creator: 'Команда ВентСтройМонтаж',
      publisher: 'ВентСтройМонтаж',
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      openGraph: {
        title: meta?.openGraph_title || meta?.title || 'ВентСтройМонтаж',
        description:
          meta?.openGraph_description ||
          meta?.description ||
          'Профессиональные услуги по ремонту и отделке помещений',
        url: meta?.openGraph_url || siteUrl,
        siteName: meta?.openGraph_siteName || 'ВентСтройМонтаж',
        locale: 'ru_RU',
        type: 'website',
        images: [
          {
            url: meta?.openGraph_image || `${siteUrl}/logo_oktogon.png`,
            width: 1200,
            height: 630,
            alt: meta?.openGraph_title || 'ВентСтройМонтаж',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: meta?.openGraph_title || meta?.title || 'ВентСтройМонтаж',
        description:
          meta?.openGraph_description ||
          meta?.description ||
          'Профессиональные услуги кондиционированию и вентиляции помещений',
        images: [meta?.openGraph_image || `${siteUrl}/logo_oktogon.png`],
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
          { url: meta?.icons_icon || '/icon_oktogon.ico' },
          new URL(meta?.icons_icon || '/icon_oktogon.ico', `${siteUrl}/icon_oktogon.ico`),
        ],
        shortcut: [meta?.icons_shortcut || '/icon_oktogon.ico'],
        apple: [
          { url: meta?.icons_apple || '/icon_oktogon.png' },
          {
            url: meta?.icons_apple || '/icon_oktogon.png',
            sizes: '180x180',
            type: 'image/png',
          },
        ],
        other: [
          {
            rel: 'mask-icon',
            url: '/icon_oktogon.svg',
            color: '#5bbad5',
          },
        ],
      },
      manifest: '/site.webmanifest',
      appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: meta?.title || 'ВашВентСтройМонтажомфорт',
      },
      other: {
        'application-name': 'ВентСтройМонтаж',
        'msapplication-TileColor': '#da532c',
        'msapplication-config': '/browserconfig.xml',
        'theme-color': '#ffffff',
        copyright: `© ${currentYear} ВентСтройМонтаж. Все права защищены.`,
        'geo.region': meta?.other_geo_region || 'RU',
        'geo.placename': meta?.other_geo_placename || 'Москва',
        'geo.position': meta?.other_geo_position || '55.7558,37.6173',
        ICBM: meta?.other_ICBM || '55.7558, 37.6173',
        'yandex-verification': meta?.yandex_verification || '',
        'google-site-verification': meta?.google_verification || '',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'ВентСтройМонтаж',
      description:
        'Установка и обслуживание систем вентиляции, кондиционирования и очистки воздуха в Москве и области. Гарантия качества, индивидуальные решения.',
    };
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ВентСтройМонтаж',
    legalName: 'ООО ВентСтройМонтаж',
    url: 'https://vsmtech.ru/',
    logo: 'https://vsmtech.ru/logo_oktogon.png',
    image: 'https://vsmtech.ru/logo_oktogon.png',
    description:
      'Профессиональные услуги по кондиционированию и вентиляции помещений в Москве и России.',
    foundingDate: '2010',
    founders: [
      {
        '@type': 'Person',
        name: 'Колчин Александр',
      },
      {
        '@type': 'Person',
        name: 'Садиков Денис',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+7-495-123-45-67',
        contactType: 'customer service',
        areaServed: 'RU',
        availableLanguage: ['Russian'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+7-495-765-43-21',
        contactType: 'technical support',
        areaServed: 'RU',
        availableLanguage: ['Russian'],
      },
    ],
    email: 'info@vsmtech.ru',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Примерная, д. 10',
      addressLocality: 'Москва',
      postalCode: '101000',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 55.7558,
      longitude: 37.6173,
    },
    hasMap: 'https://yandex.ru/maps/?ll=37.6173%2C55.7558&z=10',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '14:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/vsmtech',
      'https://twitter.com/vsmtech',
      'https://www.instagram.com/vsmtech',
      'https://www.linkedin.com/company/vsmtech',
    ],
    taxID: '7701234567',
    vatID: 'RU7701234567',
    slogan: 'Ваш надежный партнер в создании комфортного микроклимата',
    foundingLocation: {
      '@type': 'Place',
      name: 'Москва',
    },
    knowsLanguage: ['Russian', 'English'],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://vsmtech.ru/',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://vsmtech.ru/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="ru" suppressHydrationWarning>
      <Head>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Link
          rel="preconnect"
          href="https://widget.yourgood.app"
          // crossOrigin="anonymous"
        />
        <Link rel="preconnect" href="https://mc.yandex.ru" />
      </Head>
      <body className="wind-effect">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
