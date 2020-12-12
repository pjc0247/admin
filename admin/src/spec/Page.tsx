import React from 'react';

import TableView from 'page/TableView';
import DetailView from 'page/DetailView';
import CreationView from 'page/CreationView';
import IDataProvider from 'data-provider/IDataProvider';
import UserProvider from 'data-provider/user';

const createPagesForResource = (name: string, dataProvider: IDataProvider) => {
  return {
    [`${name}_list`]: {
      path: `/${name}`,
      component: (
        <TableView
          dataProvider={dataProvider}
        />
      ),
    },
    [`${name}_create`]: {
      path: `/${name}/create`,
      component: (
        <CreationView
          dataProvider={dataProvider}
        />
      ),
    },
    [`${name}_edit`]: {
      path: `/${name}/edit`,
      component: (
        <DetailView
          dataProvider={dataProvider}
        />
      ),
    },
  };
};

const Page = {
  Dashboard: {
    path: '/dashboard',
    component: () => <></>
  },

  ...createPagesForResource('user', new UserProvider()),
};
export default Page;
