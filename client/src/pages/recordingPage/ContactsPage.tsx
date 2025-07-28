import { Contacts } from '@/entities/contacts/ui/contacts';
import { RecordingForm } from '@/features/recordingForm/RecordingForm';
import styles from './ContactsPage.module.css';
import React from 'react';

export function ContactsPageComponents() {
  return (
    <>
      <h2 className={styles.h2}>С нами можно связаться</h2>
      <div className={styles.contentWrapper}>
        <div>
          <h3 className={styles.h2}>Контактные данные</h3> <Contacts />
        </div>
        <div className={styles.contactItem}>
          <h3 className={styles.h2}>Оставьте заявку</h3>
          <RecordingForm />
        </div>
      </div>
    </>
  );
}
