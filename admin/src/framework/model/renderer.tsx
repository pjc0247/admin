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
  if (renderers[type.name]) {
    const Component = renderers[type.name];
    return (
      <Component type={type}>
        {data}
      </Component>
    );
  }
  return `${data}`;
};

type PropRendererProps = {
  value: any;
  type: TypeMetadata;
};
export const PropRenderer = ({
  value,
  type,
  ...props
}: PropRendererProps) => {
  if (renderers[type.name]) {
    const Component = renderers[type.name];
    return (
      <Component type={type}>
        {value}
      </Component>
    );
  }
  return <>`${value}`</>;
};
