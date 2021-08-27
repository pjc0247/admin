import React from 'react';
import { TextField } from '@material-ui/core';

type NumberProps = {
};
export const Number = ({
  ...props
}: NumberProps) => {
  return (
    <TextField
      {...props}
      type="number"
    />
  );
};
