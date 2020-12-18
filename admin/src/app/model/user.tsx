import Model from 'framework/model';
import { label, model, readonly, type, validation } from 'framework/model/decorators';
import { notEmpty, range } from 'framework/model/validation';

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
  @validation(notEmpty())
  name: string = '기본 이름';

  @type('number')
  @validation(range(1, 100))
  age: number = 13;

  //@type('File')
  //image: string = '';

  @type('Date')
  @readonly()
  createdAt: Date = new Date();

  @type('Enum', ['admin', 'viewer', 'user'])
  role: string = 'admin';

  brief() {
    return ['name', 'age'];
  }
  groups() {
    return [
      { label: '기본 정보', props: ['name', 'age'] },
      { label: '권한', props: ['role'] },
    ];
  }
  editor() {
    return [
      ['name-2', 'age'],
      ['role', '-4'],
    ];
  }
}
export default User;
