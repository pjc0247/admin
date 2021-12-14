import React from 'react';
import { TextField } from '@material-ui/core';

type PasswordProps = {
};
export const Password = ({
  ...props
}: PasswordProps) => {
  return (
    <TextField
      {...props}
      type="password"
    />
  );
};
