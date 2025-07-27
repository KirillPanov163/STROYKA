import { FAQ } from '@/entities/FAQ/ui/FAQ';
import styles from './FAQPage.module.css';
import { Title } from '@/shared/ui/title';

export default function FAQPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <Title level={2} size='medium' variant='primary' className={styles.pageTitle}>FAQ / Вопрос-ответ</Title>
        <FAQ />
      </div>
    </div>
  );
}