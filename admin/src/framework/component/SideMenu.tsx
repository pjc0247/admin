import React from 'react';
import { Drawer, ListItem, Button, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import SideMenuSpec from 'spec/SideMenu';

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
          <Link
            to={x.path}
          >
            <Button>
              <span>
                {x.label}
              </span>
            </Button>
          </Link>
        </ListItem>
      ))}
    </Drawer>
  );
};
export default SideMenu;
