import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormMessageProps {
  name?: string;
  className?: string;
}

export const FormMessage = ({ name, className }: FormMessageProps) => {
  const { formState: { errors } } = useFormContext();
  
  if (!name || !errors[name]) return null;

  return (
    <p className={`text-sm text-red-600 mt-1 ${className}`}>
      {errors[name]?.message as string}
    </p>
  );
};