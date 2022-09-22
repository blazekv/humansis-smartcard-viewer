export const stateMerger = (state: any, rehydratedState: any) => {
  let finalRehydratedState: any = {};
  for (const moduleKey of Object.keys(rehydratedState)) {
    finalRehydratedState[moduleKey] = mergeDeep(
      { ...state[moduleKey] },
      rehydratedState[moduleKey]
    );
  }

  return { ...state, ...finalRehydratedState };
};

function mergeDeep(target: any, source: any) {
  const isObject = (obj: any) => obj && typeof obj === 'object';

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (
      isObject(targetValue) &&
      isObject(sourceValue) &&
      (!Array.isArray(targetValue) || !Array.isArray(sourceValue))
    ) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
}
