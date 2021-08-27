import React from 'react';

type DateProps = {
  children: React.ReactNode;
};
export const Date = ({
  children,
  ...props    
}: DateProps) => {
  return children?.toString();
};
