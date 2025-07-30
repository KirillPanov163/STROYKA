import { Metadata } from 'next';
import { generatePageMetadata } from '@/shared/utils/metadata';

// Generate metadata for the FAQ page
export async function generateMetadata(): Promise<Metadata> {
  // Using default index 0 as FAQ doesn't have a specific index in the provided list
  return generatePageMetadata('/');
}
