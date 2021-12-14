import React from 'react';
import { Box, Button, FormControl, InputLabel } from '@material-ui/core';

import { getModelMetadata } from 'framework/model/decorators';
import { TypeMetadata } from 'framework/model/metadata';

type ImageProps = {
  name: string;
  value: string;
  type: TypeMetadata;
  onChange: (x: string) => void;
};
export const Image = ({
  name,
  value,
  type,
  onChange,
  ...props
}: ImageProps) => {

  const onFileChange = (e: any) => {
    const file = e.target.files[0];

    if (type.fileProvider) {
      (async () => {
        const url = await type.fileProvider!
          .upload(`${name}_${Math.random()}.jpg`, file);

        console.log(url);
        onChange(url);
      })();
    }
  };
  console.log(props, value);

  return (
    <Box
      display="flex"
    >
      <Button
        variant="contained"
        component="label"
      >
        업로드
        <input
          hidden
          type="file"
          accept="image/*"
          multiple={false}
          onChange={onFileChange}
        />
      </Button>
      <img
        src={value}
      />
    </Box>
  );
};
