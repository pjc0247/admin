import React from 'react';
import styled from 'styled-components';
import { Drawer, ListItem, Button, Toolbar } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

import SideMenuSpec from 'spec/SideMenu';
import { LinkTo } from 'framework/component/wrap/LinkTo';

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

  return (
    <Drawer
      open
      variant="permanent"
      style={{ width: '100px' }}
      {...props}
    >
      <Toolbar />
      {SideMenuSpec.items.map((x: any) => (
        <ListItem>
          <LinkTo
            to={x.path}
          >
            <Button>
              <SMenuLabel
                active={location.pathname.startsWith(x.path)}
              >
                {x.label}
              </SMenuLabel>
            </Button>
          </LinkTo>
        </ListItem>
      ))}
    </Drawer>
  );
};
export default SideMenu;
