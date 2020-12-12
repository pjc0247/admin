const models = {

} as Record<string, any>;

export const model = () => {
  return (ctor: any, ...args: any) => {
    models[ctor.name] = {

    };
  };
}
