'use client';

import { FileSystemProvider } from './components/FileSystemProvider';
import { FileSystem } from './components/FileSistem';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  const { user, isInitialized } = useAppSelector((state) => state.user);
  const isAdmin = user?.role === 'ADMIN';

  const router = useRouter();

  return (
    <div className="admin-container">
      <FileSystemProvider>
        <FileSystem />
        {children}
      </FileSystemProvider>
    </div>
  );
}
