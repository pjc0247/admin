// It's an interface, but declared as `class`
// ~~~
export interface IPaginatedData {
  totalCount: number;
  data: any[];
};

export class IDataProvider {
  // create
  create(...args: any): Promise<void> {
    return Promise.resolve();
  }

  // get
  list(offset: number, limit: number): Promise<IPaginatedData> {
    return Promise.resolve({
      totalCount: 0,
      data: [],
    });
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
