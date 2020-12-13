/* Translate type format/coding between server and client
 */
class ITypeConverter {
  toClientType(value: any): any {
    return value;
  }
  toServerType(value: any): any {
    return value;
  }
}
export default ITypeConverter;
