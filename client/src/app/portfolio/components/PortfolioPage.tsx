'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { MyWorkType } from '@/entities/portfolio/model';
import { getAllMyWorksThunk } from '@/entities/portfolio/api/portfolio';
import Carousel from '../ui/Carousel';
import WorkCard from './WorkCard';
import WorkDetail from './WorkDetail';
import PortfolioLoading from './PortfolioLoading';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { boolean } from 'zod';

interface PortfolioPageProps {
  initialWorks?: MyWorkType[];
}



const PortfolioPage = ({ initialWorks = [] }: PortfolioPageProps) => {
  // const dispatch = useAppDispatch();
  // const { works, isLoading, error } = useAppSelector((state) => ({
  //   works: state.myWork.works || initialWorks,
  //   isLoading: state.myWork.isLoading,
  //   error: state.myWork.error,
  // };

  const [currentWork, setCurrentWork] = useState<MyWorkType | null>(null);

  // useEffect(() => {
  //   // if (!initialWorks.length) {
  //     dispatch(getAllMyWorksThunk());
  //   // }
  // }, []);

  const handleWorkClick = useCallback((work: MyWorkType) => {
    setCurrentWork(work);
  }, []);

  // if (isLoading && !works.length) return <PortfolioLoading />;
  // if (error) return <div className="error-message">Error: {error}</div>;
  // if (!works?.length) return <div className="empty-message">No works available</div>;

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
