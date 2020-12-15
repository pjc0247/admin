import Model from '.';
import {
  TypeMetadata,
  ModelMetadata,
  PropMetadata,
} from './metadata';

const models = {

} as Record<string, ModelMetadata>;

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
    };
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
export const type = (type: string, constraints: (any[] | undefined) = undefined) => {
  return (target: any, prop: string) => {
    const model = target.constructor.name;
    updatePropMeatadata(model, prop, {
      type: {
        name: type,
        constraints,
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
  console.log('b', breifProps);
  if (!breifProps) return getAllProps(model);

  const p = models[model].props;
  return Object.keys(p)
    .filter(x => breifProps.includes(x))
    .map(x => ({ name: x, ...(p[x] as any) }));
};
