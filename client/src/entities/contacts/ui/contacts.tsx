'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { getAllContactsThunk } from '../api/ContactsApi';
import styles from './Contacts.module.css';
import Image from 'next/image';
import Link from 'next/link';

// Функция для форматирования телефонного номера
const formatPhoneNumber = (phone: string): string => {
  // Удаляем все нецифровые символы
  const cleaned = phone.replace(/\D/g, '');

  // Проверяем длину номера и форматируем соответствующим образом
  if (cleaned.length === 11) {
    // Для российских номеров (11 цифр, начинающихся с 8 или 7)
    return `+7 (${cleaned.substring(1, 4)}) ${cleaned.substring(
      4,
      7,
    )}-${cleaned.substring(7, 9)}-${cleaned.substring(9)}`;
  } else if (cleaned.length === 10) {
    // Для номеров без кода страны (предполагаем российский номер)
    return `+7 (${cleaned.substring(0, 3)}) ${cleaned.substring(
      3,
      6,
    )}-${cleaned.substring(6, 8)}-${cleaned.substring(8)}`;
  } else if (cleaned.length > 0) {
    // Для международных номеров (просто добавляем + в начале)
    return `+${cleaned}`;
  }

  // Возвращаем исходное значение, если не удалось отформатировать
  return phone;
};

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

  const contact = contacts[0];

  return (
    <div className={styles.contactsContainer}>
      <div className={styles.contactInfo}>
        {contact.tel && (
          <div className={styles.contactItem}>
            <a href={`tel:${contact.tel.replace(/\D/g, '')}`} className={styles.value}>
              {formatPhoneNumber(contact.tel)}
            </a>
          </div>
        )}

        {contact.email && (
          <div className={styles.contactItem}>
            <span className={styles.value}>{contact.email}</span>
          </div>
        )}

        {contact.address && (
          <div className={styles.contactItem}>
            <span className={styles.value}>{contact.address}</span>
          </div>
        )}
      </div>

      <div className={styles.socialLinks}>
        {contact.whatsapp && (
          <a
            href={`https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Image
              src="/whatsapp-icon.svg"
              alt="WhatsApp"
              width={40}
              height={40}
              className={styles.socialIcon}
            />
          </a>
        )}

        {contact.telegram && (
          <a
            href={`https://t.me/${contact.telegram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <Image
              src="/telegram-icon.svg"
              alt="Telegram"
              width={40}
              height={40}
              className={styles.socialIcon}
            />
          </a>
        )}
      </div>
      <br />
      <div className={styles.textBlock}>
        <div className={styles.legal}>
          <p className={styles.legalText}>ИП Черничкина Анастасия Алексеевна</p>
          <p className={styles.legalText}>ИНН 772453181190</p>
          <p className={styles.legalText}>ОГРНИП 320774600293334</p>
        </div>
        <nav className={styles.navLinks}>
          <Link href="/privacy-policy" className={styles.link}>
            Политика конфиденциальности
          </Link>
          <br />
          <Link href="/oferta" className={styles.link}>
            Оферта
          </Link>
        </nav>
      </div>
    </div>
  );
};
