import React from "react";
import styles from './Button.module.css';

type Props = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
}

export const Button: React.FC<Props> = ({
    children,
    onClick,
    className = '',
    disabled = false,
    loading = false,
    type = 'button',
    variant = 'primary',
    size = 'medium',
}) => {
    const buttonClass = [
        styles.button,
        styles[variant],
        styles[size],
        disabled ? styles.disabled : '',
        loading ? styles.loading : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            disabled={disabled || loading}
            type={type}>
            {loading && <span className={styles.spinner} />}
            {children}
        </button>
    );
};