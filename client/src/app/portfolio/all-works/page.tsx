import { Metadata } from 'next';
import { generatePageMetadata } from '@/shared/utils/metadata';
import AllWorksClient from './AllWorksClient';



export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/portfolio/all-works');
}

export default function AllWorksPage() {
  return <AllWorksClient />;
}