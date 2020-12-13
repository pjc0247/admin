import { model, type } from 'model/decorators';

@model()
class User {
  //@editable
  //@required
  @type('string')
  name: string = '기본 이름';

  @type('number')
  age: number = 13;

  @type('Date')
  createdAt: Date = new Date();
}
export default User;
