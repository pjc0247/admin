import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import PageSepc from 'spec/Page';

const Routes = ({

}) => {
  return (
    <Router>
      <Switch>
        {Object.keys(PageSepc).map(x => {
          const page = (PageSepc as any)[x];
          return (
            <Route path={page.path}>
              {page.component}
            </Route>
          )
        })}
      </Switch>
    </Router>
  );
};
export default Routes;
