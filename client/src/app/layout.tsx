import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Профессиональный монтаж вентиляции и кондиционеров | ВашКомфорт',
  description: 'Установка и обслуживание систем вентиляции, кондиционирования и очистки воздуха в Москве и области. Гарантия качества, индивидуальные решения.',
  keywords: [
    'установка кондиционеров Москва',
    'монтаж вентиляции',
    'климатические системы',
    'обслуживание кондиционеров',
    'чистка вентиляции',
    'VRF системы',
    'сплит-системы',
    'умный микроклимат'
  ],
  authors: [{ name: 'ВашКомфорт', url: 'https://vash-comfort.ru' }],
  metadataBase: new URL('https://vash-comfort.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Монтаж вентиляции и кондиционеров в Москве | ВашКомфорт',
    description: 'Профессиональная установка климатического оборудования для дома и офиса. Индивидуальный подход, гарантия на работы.',
    url: 'https://vash-comfort.ru',
    siteName: 'ВашКомфорт',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  themeColor: '#18120e',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'geo.region': 'RU-MOW',
    'geo.placename': 'Москва',
    'geo.position': '55.7558;37.6173',
    'ICBM': '55.7558, 37.6173',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}