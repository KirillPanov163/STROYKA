'use client';
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { MyWork } from '@/entities/portfolio/model';
import PortfolioLoading from './components/PortfolioLoading';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { getAllMyWorks } from '@/entities/portfolio/api/portfolio';

// Динамическая загрузка с fallback
const PortfolioPage = dynamic(() => import('./components/PortfolioPage'), {
  loading: () => <PortfolioLoading />,
  ssr: false,
});

const Portfolio = () => {
  const { works, isLoading, error } = useAppSelector((state) => ({
    works: state.myWork.works as MyWork[],
    isLoading: state.myWork.loading,
    error: state.myWork.error,
  }));
const dispatch = useAppDispatch();

  useEffect(() => {
    // if (!initialWorks.length) {
      dispatch(getAllMyWorks());
    // }
  }, []);
  if (isLoading) return <PortfolioLoading />;
  if (error) return <div className="error-message">Error: {error}</div>;
  // if (!works?.length) return <div className="empty-message">No works found</div>;

  return <PortfolioPage initialWorks={works} />;
};

export default Portfolio;
