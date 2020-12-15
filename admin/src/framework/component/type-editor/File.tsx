import React from 'react';
import { Box, Button, FormControl, InputLabel } from '@material-ui/core';

type FileProps = {
};
export const File = ({
  ...props
}: FileProps) => {
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
          type="file"
          multiple={false}
          hidden
        />
      </Button>
    </Box>
  );
};
export default File;
