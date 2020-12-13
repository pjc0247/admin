export interface TypeMetadata {
  name: string;
  constraints: any[] | undefined;
};
export interface PropMetadata {
  name?: string;
  type?: TypeMetadata;
};
export interface ModelMetadata {
  props: Record<string, PropMetadata>;

  defaultValues?: any;
  permissions?: Record<string, string>;
};
