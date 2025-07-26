import Image from 'next/image';
import styles from './page.module.css';
import { RecordingForm } from '../features/recordingForm/RecordingForm';
import { ContactsPageComponents } from '@/pages/recordingPage/ContactsPage';

export default function Home() {
  return (
    <div className={styles.page}>
        <ContactsPageComponents/>
    </div>
  );
}
