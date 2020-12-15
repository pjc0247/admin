import Model from 'framework/model';
import { label, model, type } from 'framework/model/decorators';

@model({
  permissions: {
    admin: 'CRUD',
    viewer: 'R',
  },
})
class User extends Model {
  //@editable
  //@required
  @label('유저명')
  @type('string')
  name: string = '기본 이름';

  @type('number')
  age: number = 13;

  @type('boolean')
  image: string = '';

  @type('Date')
  createdAt: Date = new Date();

  @type('Enum', ['admin', 'viewer', 'user'])
  role: string = 'admin';

  brief() {
    return ['name', 'age'];
  }
  editor() {
    return [
      ['name-2', 'age'],
      ['role', '-4'],
    ];
  }
}
export default User;
