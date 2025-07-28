'use client'

import { usePathname } from 'next/navigation';
import { Feedback } from '@/widgets/Feedback/Feedback';
import GoodAppWidget from '@/features/WhatsappButton/WhatsappButton';

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPath = pathname?.includes('/admin') ?? false;

  return (
    <>
      {children}
      {!isAdminPath && <Feedback />}
      {!isAdminPath && <GoodAppWidget />}
    </>
  );
}