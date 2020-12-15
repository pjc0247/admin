import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

import { TypeMetadata } from 'framework/model/metadata';

type EnumProps = {
  name: string;
  type: TypeMetadata;
};
export const Enum = ({
  name,
  type,
  ...props
}: EnumProps) => {
  
  return (
    <FormControl
      {...props}
    >
      <InputLabel id={`label_${name}`}>
        {name}
      </InputLabel>
      <Select
        labelId={`label_${name}`}
        name={name}
        {...props}
      >
        {type.constraints?.map(x => (
          <MenuItem key={x} value={x}>
            {x}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default Enum;
