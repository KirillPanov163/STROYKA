import Image from 'next/image';
import styles from './page.module.css';
import ContactsPageComponents from './contacts/ContactsPageComponents';
import FAQPage from './faq/page';
import AchievementsPage from './achievements/AchievementsWidgets';
import Slider from '@/widgets/Slider/Slider';
import ContactsPage from './contacts/page';

export default function Home() {
  return (
    <div className={styles.page}>
      <AchievementsPage />
      <ContactsPage />
      <Slider/>
      <FAQPage />
    </div>
  );
}
