'use client';
import { useState } from 'react';
import styles from './FileSystem.module.css';
import { useRouter } from 'next/navigation';
import { useFileSystem } from './FileSystemProvider';

interface UrlNode {
  path: string;
  name: string;
  isOpen?: boolean;
  children?: UrlNode[];
}

export function FileSystem() {
  const router = useRouter();
  const { urlStructure, toggleNode } = useFileSystem();

  const FolderIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" className={styles.folderIcon}>
      {isOpen ? (
        <>
          <path
            d="M22 8v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h6l2 2h8c1.1 0 2 .9 2 2z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M2 12v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-8l-2-2H4c-1.1 0-2 .9-2 2z"
            fill="currentColor"
          />
        </>
      ) : (
        <path
          d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      )}
    </svg>
  );

  const FileIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" className={styles.fileIcon}>
      <path
        d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M14 2v6h6" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );

  const renderUrlNode = (node: UrlNode, level: number = 0) => {
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div
        key={node.path}
        className={styles.nodeContainer}
        style={{ marginLeft: `${level * 0}px` }}
      >
        <div
          className={`${styles.nodeItem} ${hasChildren ? styles.folder : styles.file}`}
        >
          {hasChildren ? (
            <div onClick={() => toggleNode(node.path)} className={styles.folderButton}>
              <FolderIcon isOpen={!!node.isOpen} />
              <span className={styles.nodeName}>{node.name}</span>
              <span
                onClick={() => router.push(node.path)}
                style={{ cursor: 'pointer', marginLeft: '10px' }}
              >
                {'►'}
              </span>
            </div>
          ) : (
            <div
              onClick={() => router.push(node.path)}
              className={styles.fileButton}
              style={{ cursor: 'pointer' }}
            >
              <FileIcon />
              <span className={styles.nodeName}>{node.name}</span>
            </div>
          )}
        </div>
        {node.isOpen && hasChildren && (
          <div className={styles.childrenContainer}>
            {node.children?.map((child) => renderUrlNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.title}>Файловая система сайта</h2>
      </div>
      <div className={styles.treeContainer}>
        {urlStructure.map((node) => renderUrlNode(node))}
      </div>
    </div>
  );
}
