export const dynamic = 'force-dynamic';
import styles from './components/styles/Page.module.css';
import ContactsPageComponents from './components/ContactsPageComponents';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'ВентСтройМонтаж | Контакты | Профессиональный монтаж вентиляции и кондиционеров ',
  description:
    'Установка и обслуживание систем вентиляции, кондиционирования и очистки воздуха в Москве и области. Гарантия качества, индивидуальные решения.',
};

export default function ContactsPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Контакты</h1>
      <ContactsPageComponents />
    </div>
  );
}
