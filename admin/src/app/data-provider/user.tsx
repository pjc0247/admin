import firebase from 'firebase';

import IDataProvider from 'framework/data-provider/IDataProvider';

const store = () => firebase.firestore();

class UserProvider extends IDataProvider {
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
    return (await store()
      .collection('user')
      .limit(limit)
      .get())
      .docs
      .map(x => x.data());
  }
}
export default UserProvider;
