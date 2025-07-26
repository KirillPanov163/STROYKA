import { FAQ } from '@/entities/FAQ/ui/FAQ';
import styles from './FAQPage.module.css';

export default function FAQPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.pageTitle}>FAQ / Вопрос-ответ</h1>
        <FAQ />
      </div>
    </div>
  );
}