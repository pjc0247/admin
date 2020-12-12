import { model } from './decorators';

@model()
class User {
  //@editable
  //@required
  name: String = 'DEFAULT_VALUE';
}
export default User;
