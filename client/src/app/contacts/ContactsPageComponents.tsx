'use client';
import { Contacts } from '@/entities/contacts/ui/contacts';
import { RecordingForm } from '@/features/recordingForm/RecordingForm';
import styles from './ContactsPage.module.css';
import React from 'react';

export default function ContactsPageComponents() {
  return (
    <>
      <h2 className={styles.h2}>С нами можно связаться</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.leftCol}>
          <h3 className={styles.h2}>Контактные данные</h3>
          <Contacts />
        </div>
        <div className={styles.rightCol}>
          <h3 className={styles.h2}>Оставьте заявку</h3>
          <RecordingForm />
        </div>
      </div>
    </>
  );
}
