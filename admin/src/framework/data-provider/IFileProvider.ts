export class IFileProvider {
  get(id: string): Promise<string> {
    return Promise.resolve({} as any);
  }
  upload(id: string, file: File): Promise<void> {
    return Promise.resolve();
  }
}
