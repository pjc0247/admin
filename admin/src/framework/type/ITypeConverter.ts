/* Translate type formats/codings between server and client.
 */
export class ITypeConverter {
  toClientType(value: any): any {
    return value;
  }
  toServerType(value: any): any {
    return value;
  }
};
