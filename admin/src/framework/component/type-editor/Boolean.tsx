import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';

type BooleanProps = {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
};
export const Boolean = ({
  label,
  value,
  onChange,
  ...props
}: BooleanProps) => {
  return (
    <FormControlLabel
      label={label}
      control={(
        <Switch
          checked={value}
          onChange={(e: any) => console.log(e)}
        />
      )}
    />
  );
};
export default Boolean;
