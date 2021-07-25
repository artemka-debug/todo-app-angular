const getDefinedValuesFromObject = (object: Record<string, any>) => {
  const objectCopy = object;
  const undefinedKeys = Object.keys(objectCopy)
    .filter((key) => object[key] === undefined)
    .forEach((key) => delete objectCopy[key]);

  return objectCopy;
}

export { getDefinedValuesFromObject };
