'use client';

import dynamic from 'next/dynamic';
import PortfolioLoading from './components/PortfolioLoading';

const PortfolioClient = dynamic(() => import('./PortfolioClient'), {
  ssr: false,
  loading: () => <PortfolioLoading />,
});

export default function PortfolioLoader() {
  return <PortfolioClient />;
}
