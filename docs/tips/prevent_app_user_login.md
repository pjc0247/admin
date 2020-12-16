Prevent App User Logging In to Admin
====

Remakrs
----
* Please make sure that you have to block all requests from app users from server level.
* This guide only shows that how to prevent app user login from client level.


Code
----
__auth.tsx__
```tsx
class AuthProvider extends IAuthProvider {
  login(id: string, password: string) {
    const json = fetchAsJson('/login');
    const type = _.get(json, 'user.type');
    
    if (type !== 'admin') { 
      /* save tokens, user data, etc... */
    } else {
      throw new Error('Not Authorized');
    }
  }
}
```
