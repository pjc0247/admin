import { ITypeConverter } from './ITypeConverter';

const converters = {

} as Record<string, ITypeConverter>;

export const registerTypeConverter = (type: string, converter: ITypeConverter) => {
  if (!converter)
    throw new Error(`converter is null or undefined for type: ${type}`);
  converters[type] = converter;
};

export const serverToClient = (object: any) => {

};
export const clientToServer = (object: any) => {

};
