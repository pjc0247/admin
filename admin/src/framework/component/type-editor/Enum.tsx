import React from 'react';
import { Select, MenuItem } from '@material-ui/core';

import { TypeMetadata } from 'framework/model/metadata';

type EnumProps = {
  type: TypeMetadata;
};
export const Enum = ({
  type,
  ...props
}: EnumProps) => {
  
  return (
    <Select
      {...props}
    >
      {type.constraints?.map(x => (
        <MenuItem key={x} value={x}>
          {x}
        </MenuItem>
      ))}
    </Select>
  );
};
export default Enum;
