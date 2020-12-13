import React from 'react';

import TableView from 'page/TableView';
import DetailView from 'page/DetailView';
import CreationView from 'page/CreationView';
import IDataProvider from 'data-provider/IDataProvider';
import UserProvider from 'data-provider/user';

const createPagesForResource = (model: string, dataProvider: IDataProvider) => {
  return {
    [`${model}_list`]: {
      path: `/${model}`,
      component: (
        <TableView
          model={model}
          dataProvider={dataProvider}
        />
      ),
    },
    [`${model}_create`]: {
      path: `/${model}/create`,
      component: (
        <CreationView
          dataProvider={dataProvider}
        />
      ),
    },
    [`${model}_edit`]: {
      path: `/${model}/edit`,
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

  ...createPagesForResource('User', new UserProvider()),
};
export default Page;
