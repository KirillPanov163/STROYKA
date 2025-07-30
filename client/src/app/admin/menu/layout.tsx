'use client';

import { FileSystemProvider } from './components/FileSystemProvider';
import { FileSystem } from './components/FileSistem';
import './globals.css';
import { useAppSelector } from '@/shared/Hooks/useAppSelector';
import { useAppDispatch } from '@/shared/Hooks/useAppDispatch';
import { getProfileThunk, refreshTokenThunk } from '@/entities/user/api/userThunkApi';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  const { user, isInitialized } = useAppSelector((state) => state.user);
  const isAdmin = user?.role === 'ADMIN';

  const router = useRouter();

  // useEffect(() => {
  //   if (!isInitialized) {
  //     dispatch(refreshTokenThunk()).then((result) => {
  //       if (refreshTokenThunk.fulfilled.match(result)) {
  //         dispatch(getProfileThunk());
  //       }
  //     });
  //   }
  //   if (!isInitialized && !isAdmin) {
  //     router.push('/');
  //   }
  // }, [dispatch, isInitialized]);

  return (
    <div className="admin-container">
      <FileSystemProvider>
        <FileSystem />
        {children}
      </FileSystemProvider>
    </div>
  );
}
