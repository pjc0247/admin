import LabelSpec from 'spec/Label';
import { IFileProvider } from 'framework/data-provider';

import Model from '.';
import {
  TypeMetadata,
  ModelMetadata,
  PropMetadata,
} from './metadata';

const models = {

} as Record<string, ModelMetadata>;

const preventRenaming = (x: any) => {
  // @ts-ignore
  if (!window.__models) window.__models = {};
  // @ts-ignore
  window.__models[x.name] = x;
};

interface ModelParams {
  permissions?: Record<string, string>;
};
export const model = (params: ModelParams = {}) => {
  return (ctor: new () => Model, ...args: any) => {
    const instance = new ctor();
    models[ctor.name] = {
      ...models[ctor.name],
      defaultValues: instance,
      permissions: params.permissions,
      breifProps: instance.brief(),
      groups: instance.groups(),
    };
    preventRenaming(ctor);
    console.log(models);
  };
}

const updatePropMeatadata = (model: string, prop: string, values: Partial<PropMetadata>) => {
  if (!models[model])
    models[model] = { props: {} };
  models[model].props[prop] = {
    ...(models[model].props[prop] || {}),
    ...values,
  };
};

export const label = (label: string) => {
  return (target: any, prop: string) => {
    const model = target.constructor.name;
    updatePropMeatadata(model, prop, {
      label,
    });
  };
};
export const readonly = () => {
  return (target: any, prop: string) => {
    const model = target.constructor.name;
    updatePropMeatadata(model, prop, {
      readonly: true,
    });
  };
};
export const validation = (...validators: ((v: any) => (string | null))[]) => {
  return (target: any, prop: string) => {
    const model = target.constructor.name;
    updatePropMeatadata(model, prop, {
      validators,
    });
  };
};

interface typeParams {
  fileProvider?: typeof IFileProvider;
  editorProps?: Record<string, any>;
  constraints?: (any[] | undefined);
};
export const type = (type: string, params: typeParams = {}) => {
  return (target: any, prop: string) => {
    const model = target.constructor.name;
    updatePropMeatadata(model, prop, {
      type: {
        name: type,
        fileProvider: params.fileProvider && new (params.fileProvider as any)(),
        constraints: params.constraints,
        editorProps: params.editorProps || {},
      },
    });
  };
};

export const getModelMetadata = (model: string) => {
  return models[model] || {};
};
export const getDefaultValues = (model: string) => {
  return models[model].defaultValues || {};
};
export const getAllProps = (model: string) => {
  const p = models[model].props;
  return Object.keys(p).map(x => ({ name: x, ...(p[x] as any) }));
};
export const getBreifProps = (model: string) => {
  const breifProps = models[model].breifProps;
  if (!breifProps) return getAllProps(model);

  const p = models[model].props;
  return Object.keys(p)
    .filter(x => breifProps.includes(x))
    .map(x => ({ name: x, ...(p[x] as any) }));
};
export const getModel = (model: string) => {
  return models[model];
};
export const getPropDisplayName = (model: string, prop: string) => {
  const props = getModel(model).props;
  return props[prop].label
    || LabelSpec[prop]
    || props[prop].name
    || prop;
};
