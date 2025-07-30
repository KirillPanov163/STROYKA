import { Metadata } from 'next';
import { generatePageMetadata } from '@/shared/utils/metadata';

export const dynamic = "force-dynamic";

// Generate metadata for the not-found page
export async function generateMetadata(): Promise<Metadata> {
  // Using default index 0 as not-found page doesn't have a specific index
  return generatePageMetadata('/');
}

import Link from 'next/link';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Страница не найдена</h1>
        <p className={styles.message}>
          Кажется, мы не можем найти то, что вы ищете. Возможно, страница была перемещена или удалена.
        </p>
        <Link href="/" className={styles.homeButton}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}