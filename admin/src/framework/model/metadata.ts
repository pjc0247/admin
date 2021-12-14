import { IFileProvider } from 'framework/data-provider';

export interface TypeMetadata {
  name: string;
  constraints: any[] | undefined;
  fileProvider?: IFileProvider;
  editorProps?: Record<string, any>;
};
export interface PropMetadata {
  name?: string;
  label?: string;
  type?: TypeMetadata;
  readonly?: boolean;
  validators?: ((v: any) => (string | null))[];
};
export interface ModelMetadata {
  props: Record<string, PropMetadata>;
  breifProps?: (string[] | null);
  groups?: (any[] | null); /* TODO: type */

  defaultValues?: any;
  permissions?: Record<string, string>;
};
