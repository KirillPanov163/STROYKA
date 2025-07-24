import React from "react";
import styles from './Input.module.css';

type Props = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    type?: 'text' | 'password' | 'email' | 'number';
    size?: 'small' | 'medium' | 'large';
    error?: boolean;
    fullWidth?: boolean;
}

export const Input: React.FC<Props> = ({
    value,
    onChange,
    placeholder = '',
    className = '',
    disabled = false,
    type = 'text',
    size = 'medium',
    error = false,
    fullWidth = false,
}) => {
    const inputClass = [
        styles.input,
        styles[size],
        error ? styles.error : '',
        disabled ? styles.disabled : '',
        fullWidth ? styles.fullWidth : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <input
            className={inputClass}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            type={type}
        />
    );
};