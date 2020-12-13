import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';

import AppSpec from 'spec/App';
import PageSepc from 'spec/Page';

const mayRequireAuth = (Component: any, requireAuth: boolean) => () => {
  const history = useHistory();

  if (requireAuth
    && !AppSpec.authProvider.isLoggedIn) { 
    history.replace('/login');
    return <></>;
  }

  return (
    <Component />
  );
};

const Routes = ({

}) => {
  return (
    <Switch>
      {Object.keys(PageSepc).map(x => {
        const page = (PageSepc as any)[x];
        const Component = mayRequireAuth(page.component, !page.public);

        console.log('comp', page.component);
        return (
          <Route
            path={page.path}
            exact={page.exact}
          >
            <Component />
          </Route>
        )
      })}
    </Switch>
  );
};
export default Routes;
