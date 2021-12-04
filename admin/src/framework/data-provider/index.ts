export * from './IFileProvider';

import { DataOperationKind } from 'framework/model/permission';
import { IDataProvider } from './IDataProvider';

export const hasImplementation = (dataProvider: IDataProvider, kind: DataOperationKind) => {
  console.log(dataProvider);
  const methods = Object.getOwnPropertyNames((dataProvider as any).constructor.prototype);
  
  if (kind === DataOperationKind.Create)
    return methods.includes('create');
  if (kind === DataOperationKind.Delete)
    return methods.includes('delete');
  if (kind === DataOperationKind.Read)
    return methods.includes('get') || methods.includes('list');
  if (kind === DataOperationKind.Update)
    return methods.includes('update');
  
  throw new Error(`Unexpected operation kind: ${kind}`);
};
