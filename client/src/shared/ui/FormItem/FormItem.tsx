import React from 'react';

interface FormItemProps {
  children: React.ReactNode;
  className?: string;
}

export const FormItem = ({ children, className }: FormItemProps) => {
  return <div className={`mb-4 ${className}`}>{children}</div>;
};