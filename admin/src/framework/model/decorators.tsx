interface PropMetadata {
  name?: string;
  type?: string;
};
interface ModelMetadata {
  props: Record<string, PropMetadata>;

  defaultValues?: any;
  permissions?: Record<string, string>;
};

const models = {

} as Record<string, ModelMetadata>;

interface ModelParams {
  permissions?: Record<string, string>;
};
export const model = (params: ModelParams = {}) => {
  return (ctor: any, ...args: any) => {
    models[ctor.name] = {
      ...models[ctor.name],
      defaultValues: new ctor(),
      permissions: params.permissions,
    };
    console.log(models);
  };
}
export const type = (type: string) => {
  return (target: any, prop: string) => {
    const name = target.constructor.name;
    if (!models[name])
      models[name] = { props: {} };
    models[name].props[prop] = {
      type
    };
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
