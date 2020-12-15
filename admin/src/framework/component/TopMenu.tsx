import React from 'react';
import styled from 'styled-components';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Icon,
  Avatar,
} from '@material-ui/core';
import AppIcon from 'asset/icon.png';

import AppSpec from 'spec/App';
import { LinkTo } from 'framework/component/wrap/LinkTo';

const SAppBar = styled(AppBar)`
  z-index: 2000;
`;

const TopMenu = ({
  ...props
}) => {
  const onClickLogout = () => {
    AppSpec.authProvider.logout();
    window.location.href = '/';
  };

  return (
    <SAppBar
      position="fixed"
      {...props}
    >
      <Toolbar>
        <Avatar
          src={AppIcon}
        />
        <Box mr={3} />
        <LinkTo to="/">
          <Typography variant="h6" noWrap>
            {AppSpec.name}
          </Typography>
        </LinkTo>
        <Box flexGrow={1} />
        <IconButton
          color="inherit"
          onClick={onClickLogout}
        >
          <Icon>
            logout
          </Icon>
        </IconButton>
      </Toolbar>
    </SAppBar>
  );
};
export default TopMenu;
