import React from 'react';

import TableView from 'framework/page/TableView';
import DetailView from 'framework/page/DetailView';
import CreationView from 'framework/page/CreationView';
import { IDataProvider } from 'framework/data-provider/IDataProvider';
import { ModelProvider } from 'framework/context';

export const createPagesForResource = (model: string, dataProvider: IDataProvider) => {
  const wrapWithProvider = (Component: any) => () => {
    return (
      <ModelProvider
        model={model}
        dataProvider={dataProvider}
      >
        <Component />
      </ModelProvider>
    );
  };

  return {
    [`${model}_list`]: {
      model,
      path: `/${model}`,
      exact: true,
      component: wrapWithProvider(() => (
        <TableView
          model={model}
          dataProvider={dataProvider}
        />
      )),
    },
    [`${model}_create`]: {
      model,
      path: `/${model}/create`,
      component: wrapWithProvider(() => (
        <CreationView
          model={model}
          dataProvider={dataProvider}
        />
      )),
    },
    [`${model}_edit`]: {
      model,
      path: `/${model}/edit`,
      component: wrapWithProvider(() => (
        <DetailView
          model={model}
          dataProvider={dataProvider}
        />
      )),
    },
  };
};
