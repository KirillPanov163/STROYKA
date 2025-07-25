'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { getAllContactsThunk } from '../api/ContactsApi';
import styles from './Contacts.module.css';

export const Contacts = () => {
  const dispatch = useAppDispatch();
  const { contacts, isLoading, error } = useAppSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  if (isLoading) {
    return <div className={styles.loading}>Загрузка контактов...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка загрузки контактов: {error}</div>;
  }

  if (!contacts || contacts.length === 0) {
    return <div className={styles.empty}>Контакты не найдены</div>;
  }

  // Берем первый контакт (предполагаем, что в системе только один набор контактов)
  const contact = contacts[0];

  return (
    <div className={styles.contactsContainer}>
      <h2 className={styles.title}>Наши контакты</h2>
      
      <div className={styles.contactItem}>
        <span className={styles.label}>Телефон:</span>
        {contact.tel ? (
          <a href={`tel:${contact.tel}`} className={styles.value}>
            {contact.tel}
          </a>
        ) : (
          <span className={styles.emptyValue}>Не указан</span>
        )}
      </div>

      <div className={styles.contactItem}>
        <span className={styles.label}>Email:</span>
        {contact.email ? (
          <a href={`mailto:${contact.email}`} className={styles.value}>
            {contact.email}
          </a>
        ) : (
          <span className={styles.emptyValue}>Не указан</span>
        )}
      </div>

      <div className={styles.contactItem}>
        <span className={styles.label}>Адрес:</span>
        {contact.address ? (
          <span className={styles.value}>{contact.address}</span>
        ) : (
          <span className={styles.emptyValue}>Не указан</span>
        )}
      </div>

      <div className={styles.contactItem}>
        <span className={styles.label}>WhatsApp:</span>
        {contact.whatsapp ? (
          <a 
            href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.value}
          >
            {contact.whatsapp}
          </a>
        ) : (
          <span className={styles.emptyValue}>Не указан</span>
        )}
      </div>

      <div className={styles.contactItem}>
        <span className={styles.label}>Telegram:</span>
        {contact.telegram ? (
          <a 
            href={`https://t.me/${contact.telegram.replace('@', '')}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.value}
          >
            {contact.telegram}
          </a>
        ) : (
          <span className={styles.emptyValue}>Не указан</span>
        )}
      </div>
    </div>
  );
};