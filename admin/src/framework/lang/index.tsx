import LangSpec from 'spec/Lang';
import AppSpec from 'spec/App';

const translate = (text: (string | null)) => {
  if (!text) return null;
  return text.replace(/%appname%/g, AppSpec.name);
};
export const t = (id: string, defaultText: (string | null) = null) => {
  return translate(LangSpec[id]) || translate(defaultText) || id;
};
