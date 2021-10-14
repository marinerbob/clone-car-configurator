export const normalizeData = (data, key) => {
  let normalizedData = {
      keys: [],
      values: {}
  };

  let keyName = key || 'key';

  data?.forEach(el => {
      normalizedData.keys.push(el[keyName]);
      normalizedData.values[el[keyName]] = el;
  });

  return normalizedData;
};