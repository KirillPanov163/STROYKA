import { Title } from '@/shared/ui/title';
import styles from './ContactsPage.module.css';
import { ContactsPageComponents } from '@/pages/recordingPage/ContactsPage';

export default function ContactsPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <Title level={1} size='medium' variant='primary' className={styles.pageTitle}>Контакты</Title>
          <ContactsPageComponents/>
      </div>
    </div>
  );
}
