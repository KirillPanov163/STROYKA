'use client'

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic'
const Feedback = dynamic(
  () => import('@/widgets/Feedback/Feedback').then(mod => mod.Feedback),
  { ssr: false }
)
import GoodAppWidget from '@/features/WhatsappButton/WhatsappButton';
import YandexMetrika from '@/features/WhatsappButton/YandexMetrika';

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPath = pathname?.includes('/admin') ?? false;

  return (
    <>
      {children}
      {!isAdminPath && <Feedback />}
      {!isAdminPath && <GoodAppWidget />}
      <YandexMetrika/>
    </>
  );
}