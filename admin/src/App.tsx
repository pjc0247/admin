import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CssBaseline, Toolbar } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

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
    <Router>
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
    </Router>
  );
}
export default App;
