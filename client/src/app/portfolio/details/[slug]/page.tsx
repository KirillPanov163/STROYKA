'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { getMyWorkById } from '@/entities/portfolio/api/portfolio';
import styles from './details.module.css';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';

const WorkDetailsPage = () => {
  const router = useRouter();
  const { slug } = useParams();
  const id = (slug as string).split('-').pop() || '1';
  const dispatch = useAppDispatch();
  const { currentWork, loading } = useAppSelector((state) => state.myWork);

  useEffect(() => {
    if (id) {
      dispatch(getMyWorkById(Number(id)));
    }
  }, [id, dispatch]);
  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (!currentWork) {
    return <div className={styles.notFound}>Работа не найдена</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <button
          onClick={() => router.back()}
          className={styles.backButton}
          aria-label="Назад"
        >
          Назад
        </button>
        <h1 className={styles.title}>{currentWork.title}</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          {currentWork.image && (
            <img
              src={currentWork.image}
              alt={currentWork.title || 'Изображение работы'}
              className={styles.image}
            />
          )}
        </div>

        <div className={styles.details}>
          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Площадь:</span>
            <span className={styles.detailValue}>{currentWork.square}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Помещения:</span>
            <span className={styles.detailValue}>{currentWork.quantity}</span>
          </div>

          <div className={styles.detailItem}>
            <span className={styles.detailLabel}>Время выполнения:</span>
            <span className={styles.detailValue}>{currentWork.time}</span>
          </div>

          <div className={styles.description}>
            <h3 className={styles.descriptionTitle}>Что было сделано:</h3>
            <ul className={styles.descriptionList}>
              {(() => {
                try {
                  const parsed = JSON.parse(currentWork.success_work || '[]');
                  return Array.isArray(parsed) ? (
                    parsed.map((item, idx) => (
                      <li key={idx} className={styles.descriptionItem}>
                        {item}
                      </li>
                    ))
                  ) : (
                    <li className={styles.descriptionItem}>{currentWork.success_work}</li>
                  );
                } catch {
                  return (
                    <li className={styles.descriptionItem}>{currentWork.success_work}</li>
                  );
                }
              })()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailsPage;