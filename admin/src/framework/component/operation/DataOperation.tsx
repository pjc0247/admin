import React from 'react';

import { DataOperationKind } from 'framework/model/permission';

type DataOperationProps = {
  operationKind: DataOperationKind;
  children: any;
};
export const DataOperation = ({
  operationKind,
  children,
  ...props
}: DataOperationProps) => {
  return (
    React.cloneElement(children, props)
  );
};
