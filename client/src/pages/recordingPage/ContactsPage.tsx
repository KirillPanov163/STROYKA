import { Contacts } from '@/entities/contacts/ui/contacts';
import { RecordingForm } from '@/features/recordingForm/RecordingForm';
import styles from './ContactsPage.module.css';
import React from 'react';
import { Title } from '@/shared/ui/title';

export function ContactsPageComponents() {
  return (
    <>
      <h2 className={styles.h2} >С нами можно связаться</h2>
      <div className={styles.contentWrapper}>
        <div>
          <Title level={2} className={styles.h2}>Контактные данные</Title>
          <Contacts />
        </div>
        <div className={styles.contactItem}>
          <Title level={3} className={styles.h2}>Оставьте заявку</Title>
          <RecordingForm />
        </div>
      </div>
    </>
  );
}
