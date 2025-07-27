import React from 'react';
import styles from './Input.module.css';

type Props = {
  value?: string;
  onChange: any;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'checkbox';
  inputMode?: 'text' | 'tel' | 'email' | 'numeric' | 'decimal' | 'search' | 'url';
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  fullWidth?: boolean;
  required?: boolean;
  name?: string
  id?: string
  checked?: boolean
};

export const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder = '',
  className = '',
  disabled = false,
  type = 'text',
  inputMode,
  size = 'medium',
  error = false,
  fullWidth = false,
  required = false,
}) => {
  const inputClass = [
    styles.input,
    styles[size],
    error ? styles.error : '',
    disabled ? styles.disabled : '',
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <input
      className={inputClass}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      inputMode={inputMode}
      required={required}
    />
  );
};
