'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import styles from './FileSystem.module.css';

interface UrlNode {
  path: string;
  name: string;
  isOpen?: boolean;
  children?: UrlNode[];
}

interface FileSystemContextType {
  urlStructure: UrlNode[];
  toggleNode: (path: string) => void;
}

const FileSystemContext = createContext<FileSystemContextType | undefined>(undefined);

export const FileSystemProvider = ({ children }: { children: ReactNode }) => {
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

  const toggleNode = (path: string, nodes?: UrlNode[]): UrlNode[] => {
    const targetNodes = nodes || urlStructure;
    return targetNodes.map((node) => {
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

  return (
    <FileSystemContext.Provider value={{ urlStructure, toggleNode: handleToggle }}>
      {children}
    </FileSystemContext.Provider>
  );
};

export const useFileSystem = () => {
  const context = useContext(FileSystemContext);
  if (context === undefined) {
    throw new Error('useFileSystem must be used within a FileSystemProvider');
  }
  return context;
};
