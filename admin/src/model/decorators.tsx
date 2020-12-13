interface PropMetadata {
  name?: string;
  type?: string;
};
interface ModelMetadata {
  props: Record<string, PropMetadata>;
};

const models = {

} as Record<string, ModelMetadata>;

export const model = () => {
  return (ctor: any, ...args: any) => {
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

export const getAllProps = (model: string) => {
  const p = models[model].props;
  return Object.keys(p).map(x => ({ name: x, ...(p[x] as any) }));
};
