'use client';
import { Contacts } from './recordingForm/contacts';
import { RecordingForm } from '@/app/contacts/components/recordingForm/RecordingForm';
import styles from './styles/ContactsPage.module.css';
import React from 'react';

export default function ContactsPageComponents() {
  return (
    <>
      <h2 className={styles.sectionTitle}>С нами можно связаться</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.leftCol}>
          <h3 className={styles.sectionTitle}>Контактные данные</h3>
          <Contacts />
        </div>
        <div className={styles.rightCol}>
          <h3 className={styles.sectionTitle}>Оставьте заявку</h3>
          <RecordingForm />
        </div>
      </div>
    </>
  );
}
