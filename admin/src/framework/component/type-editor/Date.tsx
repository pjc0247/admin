import React from 'react';
import { TextField } from '@material-ui/core';

type DateProps = {
};
export const Date = ({
  ...props
}: DateProps) => {
  return (
    <TextField
      type="date"
      {...props}
    />
  );
};
export default Date;
