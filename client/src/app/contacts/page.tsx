import styles from './ContactsPage.module.css';
import { ContactsPageComponents } from '@/pages/recordingPage/ContactsPage';

export default function ContactsPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.pageTitle}>Контакты</h1>
          <ContactsPageComponents/>
      </div>
    </div>
  );
}
