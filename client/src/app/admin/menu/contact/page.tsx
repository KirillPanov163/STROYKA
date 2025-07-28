import React from 'react';
import { ContactsPage } from '../widgets/contacts/ContactsPage';
import style from '@/app/admin/menu/page.module.css'

export default function page() {
  return (
    <div className={style.sidebar}>
      <ContactsPage />
    </div>
  );
}
