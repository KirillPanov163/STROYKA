'use client';
import React, { useState, useCallback } from 'react';
import { MyWork } from '@/entities/portfolio/model';
import Carousel from '../ui/Carousel';
import WorkCard from './WorkCard';
import WorkDetail from './WorkDetail';
import styles from './PortfolioPage.module.css';
import Link from 'next/link';

interface PortfolioPageProps {
  initialWorks?: MyWork[];
}

const PortfolioPage = ({ initialWorks = [] }: PortfolioPageProps) => {
  const [currentWork, setCurrentWork] = useState<MyWork | null>(null);

  const handleWorkClick = useCallback((work: MyWork) => {
    setCurrentWork(work);
  }, []);

  if (!initialWorks?.length) {
    return <div className={styles.emptyMessage}>No works available</div>;
  }

  return (
    <div className={styles.portfolioContainer}>
      <h1 className={styles.portfolioTitle}>Наши работы</h1>
      
      <div className={styles.carouselWrapper}>
        <Carousel autoPlay interval={3000} visibleItems={3}>
          {initialWorks.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
              onClick={handleWorkClick}
              isActive={currentWork?.id === work.id}
            />
          ))}
        </Carousel>
      </div>

      <div className={styles.allWorksButtonContainer}>
        <Link href="/portfolio/all-works" className={styles.allWorksButton}>
          Все наши работы
        </Link>
      </div>

      {currentWork && (
        <div className={styles.workDetailWrapper}>
          <WorkDetail work={currentWork} />
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;