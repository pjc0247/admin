# admin

Spec
----

### AppSpec
`appspec` describes essential and app-wide stuffs.
```tsx
{
  name: "MY FIRST ADMIN",

  authProvider: new AuthProvider(),
}
```

### PageSpec
`pagespec` describes routings.
```tsx
{
  Dashboard: {
    path: '/',
    exact: true,
    component: () => <Dashboard />,
  },
  
  ...createPagesForResource('User', new UserProvider()),
  ...createPagesForResource('Article', new ArticleProvider()),
}
```

### SideMenuSpec
`sidemenuspec` describes how the SideMenu(Drawer) is displayed.
```tsx
{
  items: [
    { icon: 'star', label: 'Dashboard', path: '/' },
    { icon: 'person', label: 'User', path: '/user', model: 'User' },
  ],
}
```

### TypeSpec
```tsx
{
  timestamp: TimestampKind.ISO,
}
```


Model
----
`Model`은 데이터가 어떠한 스키마로 정의되어 있는지 표현합니다.

```tsx
@model()
class User {
  @type('string')
  name: string;
  
  @type('string')
  gender: string = 'male';
}
```

### Constraints

```tsx
@model()
class User {
  @type('Enum', ['male', 'female'])
  gender: string = 'male';
}
```

### Role and Permissions

* __C__: Create documents.
* __R__: Read documents. (Allow access to enter the list page)
* __U__: Modify documents.
* __D__: Delete documnets.

```tsx
@model({
  permissions: {
    admin: 'CRUD', // or you can skip this line.
                   // Every non-specified roles act as 'CRUD' (can perform all operations).
    editor: 'CRU',
    viwer: 'R',
    app: '',      // Empty string means no-permissions.
                  // A user with `app` role won't be able to enter `Article` pages.
  },
})
class Article {
  /* ... */
}
```

You may skip providing permission list. <br>
Empty permission indicates `ALL PERMISSIONS FOR ALL USERS`.
```tsx
// every user can perform CRUD for this model:
@model()
class Article {
}
```

TypeConverter
----
`TypeConverter`는 `서버/클라이언트` 간 타입 인코딩/포멧을 변환해주는 역할을 합니다. <br />
아래와 같은 인터페이스를 구현해서 타입이 어떻게 클라이언트에 수신되고, 서버에 전송될지 정의합니다.
```tsx
class ITypeConverter {
  toClientType(value: any): any {
    return value;
  }
  toServerType(value: any): any {
    return value;
  }
}
```

Custom Components
----

### Type Renderer
```tsx
```

### Type Editor
```tsx
```


`TypeConverter`의 가장 좋은 예시는 `DateConverter`입니다. <br />
통신 프로토콜에서 시간값은 보통 `string(date string)` 또는 `number(epoch)`로 이루어져 있지만,
자바스크립트는 `moment` 혹은 `Date`를 사용해 시간을 처리합니다.<br />
<br />
아래 코드는 프로토콜과 실제 코드의 타입을 보간해주는 역할을 합니다.
```tsx
class DateConverter extends ITypeConverter {
  toClientType(value: any) {
    return moment(value);
  }
  toServerType(value: any) {
    return value.toISOString();
  }
}
```

AuthProvider
----
```tsx
class AuthProvider extends IAuthProvider {
  get isLoggedIn() {
    /* ... */
  }
  get role() {
    /* ... */
  }
  
  login(id: string, password: string) {
    /* ... */
  }
}
```
 
DataProvider
----
`DataProvider`는 DB 혹은 API 서버로부터 데이터를 가져오는 역할을 담당합니다.<br />
이 레이어가 분리되어 있음으로 인해 endpoint가 `REST API`, `gql` 혹은 디비(`firebase`, `mongo`) 에 직접 접속하던 동일한 인터페이스로 유연하게 작동할 수 있도록 해줍니다.

__An example of UserProvider that directly communicates with firestore DB__
```tsx
class UserProvider extends IDataProvider {
  // Create a new document with given values.
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


### In case that you don't have some operations
It's okay to not to define one or more operations you don't have.
```tsx
class ArticleProvider extends IDataProvider {
}
```


It's done!
----
You're ready to build your admin pages now!
