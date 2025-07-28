import React from 'react';
import styles from './Title.module.css';

type TitleProps = {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  align?: 'left' | 'center' | 'right';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
};

export const Title = ({
  children,
  className = '',
  level = 1,
  size = 'md',
  variant = 'primary',
  align = 'left',
  weight = 'semibold',
}: TitleProps) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  const titleClass = [
    styles.title,
    styles[size],
    styles[variant],
    styles[align],
    styles[weight],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return React.createElement(HeadingTag, { className: titleClass }, children);
};
