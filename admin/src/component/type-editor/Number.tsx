import React from 'react';
import { TextField } from '@material-ui/core';

type NumberProps = {
};
export const Number = ({
  ...props
}: NumberProps) => {
  return (
    <TextField
      type="number"
      {...props}
    />
  );
};
export default Number;
