import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface FormFieldProps {
  name: string;
  render: (props: { field: any; fieldState: any }) => React.ReactNode;
  control?: any;
}

export const FormField = ({ name, render, control }: FormFieldProps) => {
  const methods = useFormContext();
  
  return (
    <Controller
      name={name}
      control={control || methods.control}
      render={({ field, fieldState }) => (
        <>
          {render({ field, fieldState })}
        </>
      )}
    />
  );
};