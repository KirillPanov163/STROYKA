export const dynamic = 'force-dynamic';
import styles from './ContactsPage.module.css';
import ContactsPageComponents from './ContactsPageComponents';
import { Metadata } from 'next';
import { generatePageMetadata } from '@/shared/utils/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/contacts');
}

export default function ContactsPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.pageTitle}>Контакты</h1>
        <ContactsPageComponents />
      </div>
    </div>
  );
}
