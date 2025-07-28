// components/ui/tabs.tsx
'use client';

import React from 'react';

export const TabsContext = React.createContext<{
  activeTab: string;
  setActiveTab: (value: string) => void;
}>({
  activeTab: '',
  setActiveTab: () => {},
});

export const Tabs = ({
  defaultValue,
  children,
  className = '',
}: {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const [activeTab, setActiveTab] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={`tabs ${className}`} style={{ width: '100%' }}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div 
      className={`tabsList ${className}`}
      style={{
        display: 'flex',
        borderBottom: '1px solid #e2e8f0',
        marginBottom: '1rem'
      }}
    >
      {children}
    </div>
  );
};

export const TabsTrigger = ({
  value,
  children,
  className = '',
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { activeTab, setActiveTab } = React.useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      className={`tabsTrigger ${className} ${isActive ? 'active' : ''}`}
      style={{
        padding: '0.5rem 1rem',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        position: 'relative',
        color: '#64748b',
        fontWeight: 500,
        ...(isActive ? {
          color: '#3b82f6',
        } : {})
      }}
      onClick={() => setActiveTab(value)}
    >
      {children}
      {isActive && (
        <span 
          style={{
            position: 'absolute',
            bottom: '-1px',
            left: 0,
            right: 0,
            height: '2px',
            backgroundColor: '#3b82f6'
          }}
        />
      )}
    </button>
  );
};

export const TabsContent = ({
  value,
  children,
  className = '',
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { activeTab } = React.useContext(TabsContext);

  return (
    <div
      className={`tabsContent ${className}`}
      style={{
        padding: '1rem 0',
        display: activeTab === value ? 'block' : 'none'
      }}
    >
      {children}
    </div>
  );
};