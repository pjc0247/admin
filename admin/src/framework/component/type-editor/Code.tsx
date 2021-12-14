import React from 'react';
import { TextField } from '@material-ui/core';
import Editor from '@monaco-editor/react';
import { TypeMetadata } from 'framework/model/metadata';

type CodeProps = {
  type: TypeMetadata;
  value: string;
  onChange: (x: string) => void;
};
export const Code = ({
  type,
  value,
  onChange,
  ...props
}: CodeProps) => {
  return (
    <Editor
      height="320px"
      defaultLanguage="javascript"
      defaultValue=""
      value={value}
      onChange={(value) => onChange(value!)}
      {...props}
      {...type.editorProps}
   />
  );
};
