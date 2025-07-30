import { Metadata } from 'next';
import { generatePageMetadata } from '@/shared/utils/metadata';

// Generate metadata for the contacts page
export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/contacts');
}
