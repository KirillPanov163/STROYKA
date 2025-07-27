'use client';
import { useState } from 'react';
import styles from './FileSystem.module.css';
import { useRouter } from 'next/navigation';
import { Title } from '@/shared/ui/title';

interface UrlNode {
  path: string;
  name: string;
  isOpen?: boolean;
  children?: UrlNode[];
}

export function FileSystem() {
  const router = useRouter();
  const [urlStructure, setUrlStructure] = useState<UrlNode[]>([
    {
      path: '/',
      name: 'Главная',
      isOpen: true,
      children: [
        {
          path: '/admin/menu/',
          name: 'Управление метаданными',
          isOpen: false,
        },
        {
          path: '/faq',
          name: 'FAQ',
          isOpen: false,
          children: [
            {
              path: '/admin/menu/faq/add_answers',
              name: 'Добавить частые вопросы',
              isOpen: false,
            },
            {
              path: '/admin/menu/faq/all_answers',
              name: 'Управление всеми вопросами',
              isOpen: false,
            },
          ],
        },
      ],
    },
    {
      path: '/services',
      name: 'Услуги',
      isOpen: false,
      children: [
        {
          path: '/admin/menu/services/metadata',
          name: 'Управление метаданными',
          isOpen: false,
        },
        {
          path: '/admin/menu/services/all_services',
          name: 'Все услуги',
          isOpen: false,
          children: [
            {
              path: '/admin/menu/services/all_services/add_service',
              name: 'Добавить услугу',
              isOpen: false,
            },
            {
              path: '/admin/menu/services/all_services/(alias)',
              name: 'Управление всеми услугами',
              isOpen: false,
            },
          ],
        },
      ],
    },
    {
      path: '/portfolio',
      name: 'Наши работы',
      isOpen: false,
      children: [
        {
          path: '/admin/menu/portfolio/metadata',
          name: 'Метаданные',
          isOpen: false,
          children: [
            {
              path: '/admin/menu/portfolio/metadata/main',
              name: 'Управление метаданными главной наших работ',
              isOpen: false,
            },
            {
              path: '/admin/menu/portfolio/metadata/all_work',
              name: 'Управление метаданными всех работ',
              isOpen: false,
            },
            {
              path: '/admin/menu/portfolio/metadata/(alias)',
              name: 'Управление метаданными каждой отдельной работы',
              isOpen: false,
            },
          ],
        },
        {
          path: '/admin/menu/portfolio/all_work',
          name: 'Все работы',
          isOpen: false,
          children: [
            {
              path: '/admin/menu/portfolio/all_work/add_work',
              name: 'Опубликовать работу',
              isOpen: false,
            },
            {
              path: '/admin/menu/portfolio/all_work/works',
              name: 'Управление всеми работами',
              isOpen: false,
            },
          ],
        },
      ],
    },
    {
      path: '/contact',
      name: 'Контакты',
      isOpen: false,
      children: [
        {
          path: '/admin/menu/contact/metadata',
          name: 'Управление метаданными',
          isOpen: false,
        },
        {
          path: '/admin/menu/contact/',
          name: 'Создать контакт и управление ими',
          isOpen: false,
        },
      ],
    },
  ]);

  // SVG иконки с улучшенной видимостью
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

  const toggleNode = (path: string, nodes: UrlNode[]): UrlNode[] => {
    return nodes.map((node) => {
      if (node.path === path) {
        return { ...node, isOpen: !node.isOpen };
      }
      if (node.children) {
        return { ...node, children: toggleNode(path, node.children) };
      }
      return node;
    });
  };

  const handleToggle = (path: string) => {
    setUrlStructure((prev) => toggleNode(path, prev));
  };

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
            <div onClick={() => handleToggle(node.path)} className={styles.folderButton}>
              <FolderIcon isOpen={!!node.isOpen} />
              <span className={styles.nodeName}>{node.name}</span>
              <span onClick={() => router.push(node.path)} style={{ cursor: 'pointer', marginLeft: '10px' }}>
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
        <Title level={2} size='medium' variant='primary' className={styles.title}>Файловая система сайта</Title>
      </div>
      <div className={styles.treeContainer}>
        {urlStructure.map((node) => renderUrlNode(node))}
      </div>
    </div>
  );
}
