import IDataProvider from './IDataProvider';

class UserProvider extends IDataProvider {
  async get(id: string) {
    return await fetch(`/user/${id}`);
  }
}
export default UserProvider;
