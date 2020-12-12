import React from 'react';
import { Drawer, ListItem, Button } from '@material-ui/core';

import SideMenuSpec from 'spec/SideMenu';

const SideMenu = ({
  ...props
}) => {
  return (
    <Drawer
      open
      variant="permanent"
      {...props}
    >
      {SideMenuSpec.items.map(x => (
        <ListItem>
          <Button
            href={x.path}
          >
            <span>
              {x.label}
            </span>
          </Button>
        </ListItem>
      ))}
    </Drawer>
  );
};
export default SideMenu;
