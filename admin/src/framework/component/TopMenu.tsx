import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import AppSpec from 'spec/App';
import { LinkTo } from 'framework/component/wrap/LinkTo';

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
        <LinkTo to="/">
          <Typography variant="h6" noWrap>
            {AppSpec.name}
          </Typography>
        </LinkTo>
      </Toolbar>
    </SAppBar>
  );
};
export default TopMenu;
