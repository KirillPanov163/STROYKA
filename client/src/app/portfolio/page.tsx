import { Metadata } from 'next';
import { generatePageMetadata } from '@/shared/utils/metadata';
import PortfolioLoader from './PortfolioLoader';

// Generate metadata for the portfolio page
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/portfolio');
}

export default function PortfolioPage() {
  return <PortfolioLoader />;
}
