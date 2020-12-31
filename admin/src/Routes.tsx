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
const arrange = (pages: any) => {
  return [
    ...pages.filter((x: any) => x.path !== '/'),
    ...pages.filter((x: any) => x.path === '/')
  ].filter(x => !!x);
};

const Routes = ({

}) => {
  return (
    <Switch>
      {arrange(Object.values(PageSepc)).map(page => {
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
