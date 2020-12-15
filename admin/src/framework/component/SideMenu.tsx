import React from 'react';
import styled from 'styled-components';
import { Drawer, ListItem, Button, Toolbar, Icon } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

import SideMenuSpec from 'spec/SideMenu';
import { LinkTo } from 'framework/component/wrap/LinkTo';
import { canPerform, DataOperationKind } from 'framework/model/permission';
import AppSpec from 'spec/App';

const SMenuLabel = styled.span<any>`
  ${({ active }) => active ? `
    font-weight: bold;
  ` : `
    font-weight: normal;
  `}
`;

const SideMenu = ({
  ...props
}) => {
  const location = useLocation();
  const role = AppSpec.authProvider.role;

  if (!AppSpec.authProvider.isLoggedIn)
    return <></>;

  return (
    <Drawer
      open
      variant="permanent"
      style={{ width: '120px' }}
      {...props}
    >
      <Toolbar />
      {SideMenuSpec.items.map((x: any) => (
        (!x.model || canPerform(x.model, role, DataOperationKind.Read)) && (
          <ListItem>
            <LinkTo
              to={x.path}
            >
              <Button>
                <Icon>
                  {x.icon}
                </Icon>
                <SMenuLabel
                  active={location.pathname.startsWith(x.path)}
                >
                  {x.label}
                </SMenuLabel>
              </Button>
            </LinkTo>
          </ListItem>
        )
      ))}
    </Drawer>
  );
};
export default SideMenu;
