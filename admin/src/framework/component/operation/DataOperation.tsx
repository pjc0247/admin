import React from 'react';

import AppSpec from 'spec/App';
import { canPerform, DataOperationKind } from 'framework/model/permission';
import { hasImplementation } from 'framework/data-provider';
import { useModel } from 'framework/context';

type DataOperationProps = {
  operationKind: DataOperationKind;
  children: any;
};
export const DataOperation = ({
  operationKind,
  children,
  ...props
}: DataOperationProps) => {
  const {
    model,
    dataProvider,
  } = useModel();
  const role = AppSpec.authProvider.role;
  const shouldDisplay = 
    canPerform(model, role, operationKind)
    && hasImplementation(dataProvider, operationKind);

  if (shouldDisplay) {
    return children;
  } else {
    return <></>;
  }
};
