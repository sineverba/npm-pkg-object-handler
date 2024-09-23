/**
 * Transforms an object based on a provided mapping.
 *
 * @param initialObject - The object to be transformed.
 * @param mapping - An object that defines how to map the keys of the initial object
 *                  to new keys in the output object.
 * @returns A new object with keys transformed according to the mapping.
 */
export const objectHandler = (
  initialObject: Record<string, any>,
  mapping: Record<string, string>
): Record<string, any> => {
  // Create a new object to store the transformed values
  const transformedObject: Record<string, any> = {};

  // Iterate over the mapping to construct the transformed object
  for (const key in mapping) {
    const mappedKey = mapping[key];
    // Assign the value from the initial object to the transformed object
    transformedObject[key] = initialObject[mappedKey];
  }

  return transformedObject;
};
