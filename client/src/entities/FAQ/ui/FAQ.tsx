'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { fetchFaqs } from '../api/faqThunkApi';
import { faqActions } from '../slice/faqSlice';
import { FAQThunkStatus } from '../../../shared/enums/faqThunkTypes';
import styles from './FAQ.module.css';
import { Title } from '@/shared/ui/title';

export const FAQ = () => {
  const dispatch = useAppDispatch();
  const { data: faqs, status, error } = useAppSelector((state) => state.faq);
  const selectedFAQ = useAppSelector((state) => state.faq.selectedFAQ);

  useEffect(() => {
    dispatch(fetchFaqs());
  }, [dispatch]);

  const toggleFAQ = (id: number) => {
    if (selectedFAQ?.id === id) {
      dispatch(faqActions.clearSelectedFAQ());
    } else {
      const faq = Array.isArray(faqs) ? faqs.find((item) => item.id === id) : null;
      if (faq) {
        dispatch(faqActions.setSelectedFAQ(faq));
      }
    }
  };

  if (status === FAQThunkStatus.LOADING) {
    return <div className={styles.loading}>Загрузка вопросов...</div>;
  }

  if (status === FAQThunkStatus.FAILED) {
    return <div className={styles.error}>Ошибка: {error || 'Неизвестная ошибка'}</div>;
  }

  if (!Array.isArray(faqs)) {
    console.error('Ожидался массив faqs, получено:', faqs);
    return <div className={styles.error}>Ошибка: Неверный формат данных</div>;
  }

  if (status === FAQThunkStatus.SUCCEEDED && faqs.length === 0) {
    return <div className={styles.empty}>Вопросы не найдены</div>;
  }

  return (
    <div className={styles.faqContainer}>
      <Title level={2} size='medium' variant='primary' className={styles.title}>Часто задаваемые вопросы</Title>
      <div className={styles.faqList}>
        {faqs.map((faq) => (
          <div key={faq.id} className={styles.faqItem}>
            <div
              className={styles.question}
              onClick={() => toggleFAQ(faq.id)}
            >
              <Title level={3} size='medium' variant='primary'>{faq.question}</Title>
              <div className={`${styles.arrow} ${selectedFAQ?.id === faq.id ? styles.up : styles.down}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </div>
            </div>
            <div className={`${styles.answer} ${selectedFAQ?.id === faq.id ? styles.active : ''}`}>
              <p>{faq.answers}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};