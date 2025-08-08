export const dynamic = 'force-dynamic';
import styles from './ContactsPage.module.css';
import ContactsPageComponents from './ContactsPageComponents';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ВентСтройМонтаж | Контакты | Профессиональный монтаж вентиляции и кондиционеров ',
  description:
    'Установка и обслуживание систем вентиляции, кондиционирования и очистки воздуха в Москве и области. Гарантия качества, индивидуальные решения.',
};

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
