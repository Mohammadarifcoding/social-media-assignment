export const getLocalStorage = ({ key, fallback = null, isObject = true }) => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return fallback;

    const parsed = isObject ? JSON.parse(item) : item;

    return parsed ?? fallback;
  } catch (error) {
    console.warn(`Failed to parse localStorage item for key: ${key}`, error);
    return fallback;
  }
};

console.log('data', getLocalStorage({ key: 'token', isObject: false }));

export const setLocalStorage = (key, value) => JSON.stringify(localStorage.setItem(key, value));
