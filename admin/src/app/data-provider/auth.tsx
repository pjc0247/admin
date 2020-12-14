import IAuthProvider from 'framework/data-provider/IAuthProvider';

class AuthProvider extends IAuthProvider {
  get role() {
    return 'admin';
  }
}
export default AuthProvider;
