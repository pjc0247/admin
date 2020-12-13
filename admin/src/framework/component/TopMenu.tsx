import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import AppSpec from 'spec/App';

const SAppBar = styled(AppBar)`
  z-index: 2000;
`;

const TopMenu = ({
  ...props
}) => {
  return (
    <SAppBar
      position="fixed"
      {...props}
    >
      <Toolbar>
        <Typography variant="h6" noWrap>
          {AppSpec.name}
        </Typography>
      </Toolbar>
    </SAppBar>
  );
};
export default TopMenu;
