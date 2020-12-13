import React from 'react';
import { CssBaseline, Toolbar } from '@material-ui/core';

import TopMenu from 'framework/component/TopMenu';
import SideMenu from 'framework/component/SideMenu';
import Routes from 'Routes';

import './Bootstrap';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline>
        <TopMenu />
        <SideMenu />
        <main>
          <Toolbar />
          <Routes />
        </main>
      </CssBaseline>
    </div>
  );
}
export default App;
