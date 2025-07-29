// components/ui/Button.tsx
import React from 'react';
import styles from './Button.module.css';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost' | 'link' | 'outline';
  isLoading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = 'md',
      variant = 'primary',
      isLoading = false,
      fullWidth = false,
      className = '',
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const buttonClass = `${styles.button} ${styles[size]} ${styles[variant]} ${
      isLoading ? styles.loading : ''
    } ${fullWidth ? styles.fullWidth : ''} ${className}`;

    return (
      <button
        ref={ref}
        className={buttonClass}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && <span className={styles.spinner} />}
        {leftIcon && !isLoading && <span className={styles.leftIcon}>{leftIcon}</span>}
        {children}
        {rightIcon && !isLoading && <span className={styles.rightIcon}>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';