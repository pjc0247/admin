import React from 'react';

import TopMenu from './component/TopMenu';
import SideMenu from 'component/SideMenu';
import TableView from 'page/TableView';
import Routes from 'Routes';

const App = () => {
  return (
    <div>
      <TopMenu />
      <SideMenu />

      <TableView />

      <Routes />
    </div>
  );
}
export default App;
