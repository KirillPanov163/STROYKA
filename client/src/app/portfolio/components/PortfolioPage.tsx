'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { MyWork } from '@/entities/portfolio/model';
import { getAllMyWorks } from '@/entities/portfolio/api/portfolio';
import Carousel from '../ui/Carousel';
import WorkCard from './WorkCard';
import WorkDetail from './WorkDetail';
import PortfolioLoading from './PortfolioLoading';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';

interface PortfolioPageProps {
  initialWorks?: MyWork[];
}

const PortfolioPage = ({ initialWorks = [] }: PortfolioPageProps) => {
  const dispatch = useAppDispatch();
  const { works, isLoading, error } = useAppSelector((state) => ({
    works: state.myWork.works || initialWorks,
    isLoading: state.myWork.loading,
    error: state.myWork.error,
  }));

  const [currentWork, setCurrentWork] = useState<MyWork | null>(null);

  useEffect(() => {
    if (!initialWorks.length) {
      dispatch(getAllMyWorks());
    }
  }, []);

  const handleWorkClick = useCallback((work: MyWork) => {
    setCurrentWork(work);
  }, []);

  if (isLoading && !works.length) return <PortfolioLoading />;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!works?.length) return <div className="empty-message">No works available</div>;

  return (
    <div className="portfolio-container">
      <Carousel>
        {initialWorks.map((work) => (
          <WorkCard
            key={work.id}
            work={work}
            onClick={handleWorkClick}
            isActive={currentWork?.id === work.id}
          />
        ))}
      </Carousel>
      {currentWork && <WorkDetail work={currentWork} />}
    </div>
  );
};

export default PortfolioPage;
