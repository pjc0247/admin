# admin
 

Model
----
`Model`은 데이터가 어떠한 스키마로 정의되어 있는지 표현합니다.

```tsx
class User {
  @type('string')
  name: string;
  
  @type('string')
  gender: string = 'male';
}
```
 
DataProvider
----
`DataProvider`는 DB 혹은 API 서버로부터 데이터를 가져오는 역할을 담당합니다.<br />
이 레이어가 분리되어 있음으로 인해 endpoint가 `REST API`, `gql` 혹은 디비(`firebase`, `mongo`) 에 직접 접속하던 동일한 인터페이스로 유연하게 작동할 수 있도록 해줍니다.

__An example of UserProvider that directly communicates with firestore DB__
```tsx
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
  
  /* And other CRUD operations goes here .... */
}
```
