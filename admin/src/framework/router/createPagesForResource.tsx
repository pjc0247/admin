import React from 'react';

import TableView from 'framework/page/TableView';
import DetailView from 'framework/page/DetailView';
import CreationView from 'framework/page/CreationView';
import IDataProvider from 'framework/data-provider/IDataProvider';

export const createPagesForResource = (model: string, dataProvider: IDataProvider) => {
  return {
    [`${model}_list`]: {
      path: `/${model}`,
      exact: true,
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
          model={model}
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
