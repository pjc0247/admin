import React from 'react';
import { AppBar } from '@material-ui/core';

import AppSpec from 'spec/App';

const TopMenu = ({
  ...props
}) => {
  return (
    <AppBar
      position="static"
      {...props}
    >
      {AppSpec.name}
    </AppBar>
  );
};
export default TopMenu;
