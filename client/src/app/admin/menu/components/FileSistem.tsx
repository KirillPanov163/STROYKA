'use client';

import { useRouter } from 'next/navigation';
import { useFileSystem } from './FileSystemProvider';

import Layout from 'antd/es/layout';
import Typography from 'antd/es/typography';
import Space from 'antd/es/space';
import Button from 'antd/es/button';
import {
  FolderOpenOutlined,
  FolderOutlined,
  FileOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { Title, Text } = Typography;

interface UrlNode {
  path: string;
  name: string;
  isOpen?: boolean;
  children?: UrlNode[];
}

export function FileSystem() {
  const router = useRouter();
  const { urlStructure, toggleNode } = useFileSystem();

  const renderUrlNode = (node: UrlNode, level: number = 0) => {
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.path} style={{ marginLeft: level * 16, marginBottom: 10 }}>
        <Space
          align="start"
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            maxWidth: '100%',
          }}
        >
          {hasChildren ? (
            <Button
              type="text"
              icon={
                node.isOpen ? (
                  <FolderOpenOutlined style={{ color: '#69b1ff' }} />
                ) : (
                  <FolderOutlined />
                )
              }
              onClick={() => toggleNode(node.path)}
              style={{
                color: '#69b1ff',
                padding: 0,
                display: 'flex',
                alignItems: 'flex-start',
                textAlign: 'left',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                maxWidth: 200,
              }}
            >
              <span style={{ color: '#fff', maxWidth: '100%' }}>
                {node.name}
              </span>
            </Button>
          ) : (
            <Button
              type="text"
              icon={<FileOutlined />}
              onClick={() => router.push(node.path)}
              style={{
                color: '#fd9b9b',
                padding: 0,
                display: 'flex',
                alignItems: 'flex-start',
                textAlign: 'left',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                maxWidth: 200,
              }}
            >
              <span style={{ color: '#fff', maxWidth: '100%' }}>
                {node.name}
              </span>
            </Button>
          )}
          {hasChildren && (
            <Button
              type="link"
              size="small"
              onClick={() => router.push(node.path)}
              style={{ marginLeft: 4 }}
            >
              ►
            </Button>
          )}
        </Space>

        {node.isOpen && hasChildren && (
          <div style={{ marginTop: 10 }}>
            {node.children?.map((child) => renderUrlNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <Sider
      width="20%"
      style={{
        background:
          'linear-gradient(135deg, #1e293b 0%, #334155 25%, #475569 50%, #64748b 75%, #94a3b8 100%)',
        padding: '16px',
        overflowY: 'auto',
        color: 'white',
      }}
    >
      <Title level={4} style={{ color: '#fff' }}>
        Файловая система сайта
      </Title>
      <div>{urlStructure.map((node) => renderUrlNode(node))}</div>
    </Sider>
  );
}
