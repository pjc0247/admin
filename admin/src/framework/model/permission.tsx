import { getModelMetadata } from './decorators';

export enum DataOperationKind {
  Create = 'C',
  Read = 'R',
  Update = 'U',
  Delete = 'D',
};

export const canPerform = (model: string, role: string, kind: DataOperationKind) => {
  const permissions = getModelMetadata(model).permissions || {};
  if (!permissions[role] && permissions[role] !== '') return true;
  return permissions[role].includes(kind);
};
