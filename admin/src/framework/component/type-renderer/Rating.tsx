import React from 'react';
import MuiRating from '@material-ui/lab/Rating';

type RatingProps = {
  children: React.ReactNode;
};
export const Rating = ({
  children,
  ...props    
}: RatingProps) => {
  const v = children as number;
  return (
    <MuiRating
      readOnly
      value={v}
    />
  );
};
