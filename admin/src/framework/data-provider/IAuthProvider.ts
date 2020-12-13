class IAuthProvider {
  private __isLoggedIn = false;

  get isLoggedIn() {
    return this.__isLoggedIn;
  }

  login(id: string, password: string): Promise<void> | boolean {
    console.log(`mockup login with id: ${id}, password: ${password}`);
    this.__isLoggedIn = true;
    return Promise.resolve();
  }
}
export default IAuthProvider;
