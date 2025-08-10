'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
const Feedback = dynamic(
  () =>
    import('@/app/components/contexts/LayoutContext/providers/Feedback').then(
      (mod) => mod.Feedback,
    ),
  { ssr: false },
);
import GoodAppWidget from '@/app/components/contexts/LayoutContext/providers/WhatsappButton';
import YandexMetrika from '@/app/components/contexts/LayoutContext/providers/YandexMetrika';
import { Providers } from './store/Providers';
import { ThemeProvider } from './theme/ThemeContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ThemeToggle } from './theme/ThemeToggle/ThemeToggle';

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPath = pathname?.includes('/admin') ?? false;

  return (
    <>
      <Providers>
        <ThemeProvider>
          {!isAdminPath && <ThemeToggle />}
          <Header />
          <main>
            {children}
            {!isAdminPath && <Feedback />}
            {!isAdminPath && <GoodAppWidget />}
            <YandexMetrika />
          </main>
          <Footer />
        </ThemeProvider>
      </Providers>
    </>
  );
}
