import Reactfrom 'react';

import AppSpec from 'spec/App';
import { getModelMetadata, getPropDisplayName } from './decorators';
import { TypeMetadata } from './metadata';
import { validate } from './validation';

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
    const errors = validate(value, modelMetadata.props[prop].validators || []);
    
    return (
      <Component
        label={getPropDisplayName(model, prop)}
        name={prop}
        value={value}
        type={type}
        onChange={onChange}
        readOnly={modelMetadata.props[prop].readonly}
        error={errors.length > 0}
        helperText={errors[0]}
        {...AppSpec.commonEditorProps}
      />
    );
  }
  return value;
};
