// It's an interface, but declared as `class`
// ~~~

class IDataProvider {
  // create
  create(...args: any): Promise<void> {
    return Promise.resolve();
  }

  // get
  list(offset: number, limit: number): Promise<any[]> {
    return Promise.resolve([]);
  }
  get(id: string): Promise<any> {
    return Promise.resolve({} as any);
  }
  
  // update
  update(id: string, ...args: any): Promise<void> {
    return Promise.resolve();
  }

  // delete
  delete(id: string): Promise<void> {
    return Promise.resolve();
  }
  deleteMany(ids: string[]): Promise<void> {
    return Promise.resolve();
  }
}
export default IDataProvider;
