import { Contacts } from '@/entities/contacts/ui/contacts';
import { RecordingForm } from '@/features/recordingForm/RecordingForm';
import styles from './ContactsPage.module.css'
import React from 'react';

export function ContactsPageComponents() {
  return (
    <div>
      <div className={styles.contentWrapper}>
        <div>
          <Contacts />
        </div>
        <div className={styles.contactItem}>
          <RecordingForm />
        </div>
      </div>
    </div>
  );
}
