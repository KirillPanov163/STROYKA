import React from 'react';

interface InputProps {
  type: string;
  name: string;
  value: string;
}

const Input = ({ type, name, value }: InputProps) => {
  return <input type={type} name={name} value={value} />;
};

export default Input;
