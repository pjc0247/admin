import { IAuthProvider } from 'framework/data-provider/IAuthProvider';

export class AuthProvider extends IAuthProvider {
  get role() {
    return 'admin';
  }
}
