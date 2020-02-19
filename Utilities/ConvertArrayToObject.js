export const ConvertArrayToObject = (array, key) =>
  array.reduce(
    (obj, item) => ({
      ...obj,
      [item[key]]: item
    }),
    {}
  );
