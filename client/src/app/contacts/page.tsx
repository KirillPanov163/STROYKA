import { Contacts } from '@/entities/contacts/ui/contacts';
import styles from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.pageTitle}>Контакты</h1>
        <div className={styles.contentWrapper}>
          <div>
            <Contacts />
          </div>
          <div className={styles.contactItem}>
            <h2>какой-то пиздатый див</h2>
            <img src="/den.png" alt="den" style={{width: "200px", height: "200px", borderRadius: "25px"}} />
          </div>
          
        </div>
      </div>
    </div>
  );
}