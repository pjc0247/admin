import { model, type } from './decorators';

@model()
class User {
  //@editable
  //@required
  @type('string')
  name: String = 'DEFAULT_VALUE';

  @type('number')
  age: String = 'DEFAULT_VALUE';

  @type('Date')
  createdAt: String = 'DEFAULT_VALUE';
}
export default User;
