'use client';

import React, { useEffect } from 'react';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { getAllMyWorks } from '@/entities/portfolio/api/portfolio';
import { MyWork } from '@/entities/portfolio/model';
import Link from 'next/link';
import styles from './allWorks.module.css';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';

const AllWorksPage = () => {
  const dispatch = useAppDispatch();
  const { works, loading } = useAppSelector((state) => state.myWork);

  useEffect(() => {
    dispatch(getAllMyWorks());
  }, [dispatch]);

  if (loading) {
    return <div className={styles.loading}>Загрузка работ...</div>;
  }

  if (!works?.length) {
    return <div className={styles.empty}>Нет доступных работ</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Все наши работы</h1>
      
      <div className={styles.worksGrid}>
        {works.map((work) => (
          <div key={work.id} className={styles.workCard}>
            <h3 className={styles.workTitle}>{work.title}</h3>
            
            {work.image && (
              <div className={styles.imageContainer}>
                <img
                  src={work.image}
                  alt={work.title || 'Изображение работы'}
                  className={styles.workImage}
                />
              </div>
            )}
            
            <Link 
              href={`/portfolio/details/${work.id}`}
              className={styles.detailsButton}
            >
              Подробнее
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllWorksPage;