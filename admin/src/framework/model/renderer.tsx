import React from 'react';

const renderers = {

} as Record<string, any>;

export const registerRenderer = (type: string, component: any) => {
  if (!component)
    throw new Error(`component is null or undefined for type: ${type}`);
  renderers[type] = component;
};
export const renderProp = (data: any, type: string) => {
  if (renderers[type]) {
    const Component = renderers[type];
    return <Component>{data}</Component>;
  }
  return data;
};
