import firebase from 'firebase';

import IDataProvider from './IDataProvider';

const store = () => firebase.firestore();

class UserProvider extends IDataProvider {
  async create(values: any) {
    await store()
      .collection('user')
      .add(values);
  }
  async get(id: string) {
    return await store()
      .collection('user')
      .doc(id)
      .get();
  }
  async list(offset: number, limit: number) {
    return (await store()
      .collection('user')
      .startAt(offset)
      .limit(limit)
      .get())
      .docs;
  }
}
export default UserProvider;
