'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';

const MoonIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#f59e0b" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ backgroundColor: 'transparent' }}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="none" />
  </svg>
);

const SunIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#f59e0b" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ backgroundColor: 'transparent' }}
  >
    <circle cx="12" cy="12" r="5" fill="none" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button 
        className="w-12 h-12 flex items-center justify-center"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: '80%',
      right: '32px',
      zIndex: 50,
      backgroundColor: 'transparent',
      pointerEvents: 'auto'
    }}>
      <div
        onClick={toggleTheme}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: '50%',
          width: '65px',
          height: '65px',
          display: 'flex',
          cursor: 'pointer',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme === 'light' ? '#333333' : '#ffffff',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          willChange: 'transform, box-shadow',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          border: '2px solid rgba(0, 0, 0, 0.6)',
          boxShadow: hovered 
            ? (theme === 'light' 
                ? '0 4px 20px rgba(0, 0, 0, 0.7)' 
                : '0 4px 20px rgba(251, 191, 36, 0.3)')
            : 'none'
        }}
        aria-label={theme === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему'}
      >
        {theme === 'light' ? <MoonIcon /> : <SunIcon />}
      </div>
    </div>
  );
};
