import { model, type } from 'framework/model/decorators';

@model({
  permissions: {
    admin: 'CRUD',
    viewer: 'R',
  },
})
class User {
  //@editable
  //@required
  @type('string')
  name: string = '기본 이름';

  @type('number')
  age: number = 13;

  @type('Date')
  createdAt: Date = new Date();

  @type('Enum', ['admin', 'viewer', 'user'])
  role: string = 'admin';
}
export default User;
