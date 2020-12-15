import React from 'react';

import AppSpec from 'spec/App';
import { TypeMetadata } from './metadata';

const editors = {

} as Record<string, any>;

export const registerEditor = (type: string, component: any) => {
  if (!component)
    throw new Error(`component is null or undefined for type: ${type}`);
  editors[type] = component;
};
export const renderPropEditor = (name: string, type: TypeMetadata, value: any, onChange: (x: any) => void) => {
  if (editors[type.name]) {
    const Component = editors[type.name];
    return (
      <Component
        label={name}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        {...AppSpec.commonEditorProps}
      />
    );
  }
  return value;
};
