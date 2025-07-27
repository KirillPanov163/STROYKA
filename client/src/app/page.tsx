import Image from 'next/image';
import styles from './page.module.css';
import { ContactsPageComponents } from '@/pages/recordingPage/ContactsPage';
import FAQPage from './faq/page';

export default function Home() {
  return (
    <div className={styles.page}>
        <ContactsPageComponents/>
        <FAQPage/>
    </div>
  );
}
