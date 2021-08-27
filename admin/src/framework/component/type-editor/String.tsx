import React from 'react';
import { TextField } from '@material-ui/core';

type StringProps = {
};
export const String = ({
  ...props
}: StringProps) => {
  return (
    <TextField
      {...props}
    />
  );
};
