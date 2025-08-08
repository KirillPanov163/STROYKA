import { Metadata } from 'next';
import { generatePageMetadata } from '@/shared/utils/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata('/contacts');
}
