import React from 'react';

interface FormControlProps {
  children: React.ReactNode;
  className?: string;
}

export const FormControl = ({ children, className }: FormControlProps) => {
  return <div className={className}>{children}</div>;
};