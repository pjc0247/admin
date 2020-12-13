import React from 'react';

import { TypeMetadata } from './metadata';

const renderers = {

} as Record<string, any>;

export const registerRenderer = (type: string, component: any) => {
  if (!component)
    throw new Error(`component is null or undefined for type: ${type}`);
  renderers[type] = component;
};
export const renderProp = (data: any, type: TypeMetadata) => {
  console.log('type', type);
  if (renderers[type.name]) {
    const Component = renderers[type.name];
    return <Component>{data}</Component>;
  }
  return `${data}`;
};
