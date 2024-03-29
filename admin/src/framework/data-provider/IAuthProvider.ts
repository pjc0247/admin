export class IAuthProvider {
  private __isLoggedIn = false;

  get isLoggedIn() {
    return this.__isLoggedIn;
  }
  get role() {
    return 'admin';
  }

  login(id: string, password: string): Promise<boolean> {
    console.log(`mockup login with id: ${id}, password: ${password}`);
    this.__isLoggedIn = true;
    return Promise.resolve(true);
  }
  logout() {
  }
}
