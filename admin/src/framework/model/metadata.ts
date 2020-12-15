export interface TypeMetadata {
  name: string;
  constraints: any[] | undefined;
};
export interface PropMetadata {
  name?: string;
  label?: string;
  type?: TypeMetadata;
};
export interface ModelMetadata {
  props: Record<string, PropMetadata>;
  breifProps?: (string[] | null);

  defaultValues?: any;
  permissions?: Record<string, string>;
};
