import React from 'react';

const editors = {

} as Record<string, any>;

export const registerEditor = (type: string, component: any) => {
  if (!component)
    throw new Error(`component is null or undefined for type: ${type}`);
  editors[type] = component;
};
export const renderPropEditor = (name: string, type: string, value: any, onChange: (x: any) => void) => {
  if (editors[type]) {
    const Component = editors[type];
    return (
      <Component
        name={name}
        value={value}
        onChange={onChange}
      />
    );
  }
  return value;
};
