import React from 'react';

import AppSpec from 'spec/App';
import { getModelMetadata, getPropDisplayName } from './decorators';
import { TypeMetadata } from './metadata';

const editors = {

} as Record<string, any>;

export const registerEditor = (type: string, component: any) => {
  if (!component)
    throw new Error(`component is null or undefined for type: ${type}`);
  editors[type] = component;
};
export const renderPropEditor = (model: string, prop: string, type: TypeMetadata, value: any, onChange: (x: any) => void) => {
  if (editors[type.name]) {
    const modelMetadata = getModelMetadata(model);
    const Component = editors[type.name];
    console.log(modelMetadata, modelMetadata.props[prop].readonly);
    return (
      <Component
        label={getPropDisplayName(model, prop)}
        name={prop}
        value={value}
        type={type}
        onChange={onChange}
        readOnly={modelMetadata.props[prop].readonly}
        {...AppSpec.commonEditorProps}
      />
    );
  }
  return value;
};
