export const range = (min: number, max: number) => {
  return (v: number) => {
    if (v >= min && v <= max) return null;
    return `값은 ${min}과 ${max} 사이여야 합니다.`;
  };
};
export const notEmpty = () => {
  return (v: string | any[]) => {
    if (Array.isArray(v)) {
      if (v.length === 0)
        return `값이 있어야 합니다.`;
      return null;
    } else {
      if (!v || v.length === 0)
        return `값이 있어야 합니다.`;
      return null;
    }
  };
};

export const validate = (v: any, validators: ((v: any) => string | null)[]) => {
  return validators.map(x => x(v)).filter(x => !!x);
};
