export const isNullish = (obj: object) => {
  return Object.values(obj).some((value) => {
    if (value === '') {
      return true;
    }

    return false;
  });
};
