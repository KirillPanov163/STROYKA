import React from 'react';
import styles from './Title.module.css';

type Props = {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  align?: 'left' | 'center' | 'right';
};

export const Title: React.FC<Props> = ({
  children,
  className = '',
  level,
  size = 'medium',
  variant = 'primary',
  align = 'left',
}) => {
  const titleClass = [
    styles.title,
    styles[size],
    styles[variant],
    styles[align],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  switch (level) {
    case 1:
      return <h1 className={titleClass}>{children}</h1>;
    case 2:
      return <h2 className={titleClass}>{children}</h2>;
    case 3:
      return <h3 className={titleClass}>{children}</h3>;
    default:
      return <p className={titleClass}>{children}</p>;
  }
};
