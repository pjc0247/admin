import firebase from 'firebase';

import { IDataProvider } from 'framework/data-provider/IDataProvider';

const store = () => firebase.firestore();

export class UserProvider extends IDataProvider {
  async create(values: any) {
    await store()
      .collection('user')
      .add(values);
  }
  async get(id: string) {
    return (await store()
      .collection('user')
      .doc(id)
      .get())
      .data();
  }
  async list(offset: number, limit: number) {
    // this method does not implement pagination
    // since it's just a simple demo and firestore is not pagination friendly.
    const data = (await store()
      .collection('user')
      .limit(limit)
      .get())
      .docs
      .map(x => ({ id: x.id, ...x.data() }));
    return {
      data,
      totalCount: limit,
    };
  }
  async update(id: string, value: any) {
    await store()
      .collection('user')
      .doc(id)
      .update(value);
  }

  /*
  async delete(id: string) {

  }
  */
}
