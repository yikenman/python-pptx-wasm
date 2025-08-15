export const null_to_undefined_converter = (key: string, value: any) => {
  return value === null ? undefined : value;
};

export const undefined_to_null_converter = (key: string, value: any) => {
  return value === undefined ? null : value;
};
