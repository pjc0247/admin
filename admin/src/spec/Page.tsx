import React from 'react';

import { createPagesForResource } from 'framework/router/createPagesForResource';
import UserProvider from 'app/data-provider/user';

const Page = {
  Dashboard: {
    path: '/dashboard',
    component: () => <></>
  },

  ...createPagesForResource('User', new UserProvider()),
};
export default Page;
