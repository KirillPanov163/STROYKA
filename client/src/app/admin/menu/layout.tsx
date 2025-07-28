'use client';

import { FileSystemProvider } from './components/FileSystemProvider';
import { FileSystem } from './components/FileSistem';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex' }} className="admin-container">
      <FileSystemProvider>
        <FileSystem />
        {children}
      </FileSystemProvider>
    </div>
  );
}
