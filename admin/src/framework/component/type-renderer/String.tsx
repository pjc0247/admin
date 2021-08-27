import React from 'react';

type StringProps = {
  children: React.ReactNode;
};
export const String = ({
  children,
  ...props    
}: StringProps) => {
  return children || '';
};
