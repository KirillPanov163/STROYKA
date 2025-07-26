'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { fetchFaqs } from '../api/faqThunkApi';
import { faqActions } from '../slice/faqSlice';
import styles from './FAQ.module.css';

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
      const faq = faqs.find((item) => item.id === id);
      if (faq) {
        dispatch(faqActions.setSelectedFAQ(faq));
      }
    }
  };

  if (status === 'loading') {
    return <div className={styles.loading}>Загрузка вопросов...</div>;
  }

  if (status === 'failed') {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }

  if (faqs.length === 0) {
    return <div className={styles.empty}>Вопросы не найдены</div>;
  }

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.title}>FAQ / Вопрос-ответ</h2>
      <div className={styles.faqList}>
        {faqs.map((faq) => (
          <div key={faq.id} className={styles.faqItem}>
            <div
              className={`${styles.question} ${selectedFAQ?.id === faq.id ? styles.active : ''}`}
              onClick={() => toggleFAQ(faq.id)}
            >
              <h3>{faq.question}</h3>
              <span className={styles.arrow}>{selectedFAQ?.id === faq.id ? '−' : '+'}</span>
            </div>
            {selectedFAQ?.id === faq.id && (
              <div className={styles.answer}>
                <p>{faq.answers}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};