import React from 'react';

import { createPagesForResource } from 'framework/router/createPagesForResource';
import { Login } from 'framework/page/Login';
import UserProvider from 'app/data-provider/user';
import { Dashboard } from 'app/page/Dashboard';

const Page = {
  Dashboard: {
    path: '/',
    exact: true,
    component: () => <Dashboard />,
  },
  Login: {
    path: '/login',
    exact: true,
    public: true,
    component: () => <Login />,
  },

  ...createPagesForResource('User', new UserProvider()),
};
export default Page;
