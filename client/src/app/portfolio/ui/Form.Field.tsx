import React from 'react';

interface FieldProps {
  children: React.ReactNode;
}

const Field = ({ children }: FieldProps) => {
  return <div>{children}</div>;
};

export default Field;
