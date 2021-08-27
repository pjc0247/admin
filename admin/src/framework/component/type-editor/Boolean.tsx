import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import { useFormikContext } from 'formik';

type BooleanProps = {
  name: string;
  label: string;
  value: boolean;
  onChange: (v: any) => void;
};
export const Boolean = ({
  name,
  label,
  value,
  onChange,
  ...props
}: BooleanProps) => {
  const {
    setFieldValue,
  } = useFormikContext();
  
  return (
    <FormControlLabel
      label={label}
      control={(
        <Switch
          checked={value}
          onChange={(e) => setFieldValue(name, e.target.checked)}
        />
      )}
    />
  );
};
