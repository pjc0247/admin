import React from 'react';

type NumberProps = {
  children: React.ReactNode;
};
export const Number = ({
  children,
  ...props    
}: NumberProps) => {
  return `${children}`;
};
