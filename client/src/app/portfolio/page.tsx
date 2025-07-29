'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { MyWorkType } from '@/entities/portfolio/model';
import PortfolioLoading from './components/PortfolioLoading';

// Динамическая загрузка с fallback
const PortfolioPage = dynamic(() => import('./components/PortfolioPage'), {
  loading: () => <PortfolioLoading />,
  ssr: false,
});

const Portfolio = () => {
  const { works, isLoading, error } = useAppSelector((state) => ({
    works: state.myWork.works as MyWorkType[],
    isLoading: state.myWork.isLoading,
    error: state.myWork.error,
  }));

  if (isLoading) return <PortfolioLoading />;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!works?.length) return <div className="empty-message">No works found</div>;

  return <PortfolioPage initialWorks={works} />;
};

export default Portfolio;
