import React from 'react';

interface LabelProps {
  children: React.ReactNode;
}

const Label = ({ children }: LabelProps) => {
  return <label>{children}</label>;
};

export default Label;
