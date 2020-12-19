import LangSpec from 'spec/Lang';
import AppSpec from 'spec/App';

const translate = (
  text: (string | null),
  values: Record<string, any> = {},
) => {
  if (!text) return null;
  return text.replace(/%appname%/g, AppSpec.name);
};
export const t = (
  id: string,
  values: Record<string, any> = {},
  defaultText: (string | null) = null,
) => {
  return translate(LangSpec[id], values)
    || translate(defaultText, values)
    || id;
};
