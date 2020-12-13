import React from 'react';
import { Drawer, ListItem, Button, Toolbar } from '@material-ui/core';

import SideMenuSpec from 'spec/SideMenu';
import { LinkTo } from 'framework/component/wrap/LinkTo';

const SideMenu = ({
  ...props
}) => {
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
              <span>
                {x.label}
              </span>
            </Button>
          </LinkTo>
        </ListItem>
      ))}
    </Drawer>
  );
};
export default SideMenu;
