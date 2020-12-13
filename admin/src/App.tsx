import React from 'react';
import styled from 'styled-components';
import { CssBaseline, Toolbar } from '@material-ui/core';

import TopMenu from 'framework/component/TopMenu';
import SideMenu from 'framework/component/SideMenu';
import Routes from 'Routes';

import 'spec/Type';
import './Bootstrap';

const SMain = styled.main`
  flex-grow: 1;

  padding-top: 20px;
`;

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline>
        <TopMenu />
        <SideMenu />
        <SMain>
          <Toolbar />
          <Routes />
        </SMain>
      </CssBaseline>
    </div>
  );
}
export default App;
