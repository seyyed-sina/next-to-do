/**
 * Updates an old object with new values and returns a new object.
 * @param oldObj The original object.
 * @param updatedVal The new values to update the object with.
 * @returns A new object with the updated values.
 */
export const updateObj = <T extends object, U extends object>(
  oldObj: T,
  updatedVal: U,
): T & U => {
  return {
    ...oldObj,
    ...updatedVal,
  } as T & U;
};

/**
 * Concatenates truthy classes into a space-separated string.
 *
 * @param classes - The classes to concatenate.
 * @returns The concatenated classes.
 */
export const clx = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};
