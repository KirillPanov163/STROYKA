import { Metadata } from 'next';
import { generatePageMetadata } from '@/shared/utils/metadata';

// Generate metadata for the home page
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/');
}
