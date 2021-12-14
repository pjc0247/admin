export class IFileProvider {
  get(id: string): Promise<string> {
    return Promise.resolve('');
  }
  upload(id: string, file: File): Promise<string> {
    return Promise.resolve('');
  }
}
