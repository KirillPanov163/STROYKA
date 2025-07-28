import React from 'react';

interface FormLabelProps {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
}

export const FormLabel = ({ children, className, htmlFor }: FormLabelProps) => {
  return (
    <label 
      className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};