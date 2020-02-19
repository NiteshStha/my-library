/**
 * Returns a new array that is grouped by the key that you defined.
 * @param {Array} array The array that you want to group.
 * @param {string} key The key of the array you want to group by.
 * @returns {Array} Returns a new array that is grouped by the key that you defined.
 */
export const GroupArrayByKey = (array, key) => {
  return array.reduce((acc, index) => {
    (acc[index[key]] = acc[index[key]] || []).push(index);
    return acc;
  }, {});
};
