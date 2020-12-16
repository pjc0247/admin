export interface TypeMetadata {
  name: string;
  constraints: any[] | undefined;
};
export interface PropMetadata {
  name?: string;
  label?: string;
  type?: TypeMetadata;
  readonly?: boolean;
};
export interface ModelMetadata {
  props: Record<string, PropMetadata>;
  breifProps?: (string[] | null);
  groups?: (any[] | null); /* TODO: type */

  defaultValues?: any;
  permissions?: Record<string, string>;
};
