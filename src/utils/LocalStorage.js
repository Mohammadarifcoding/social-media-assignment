export const getLocalStorage = (key, fallback = null) => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return fallback;

    const parsed = JSON.parse(item);

    return parsed ?? fallback;
  } catch (error) {
    console.warn(`Failed to parse localStorage item for key: ${key}`, error);
    return fallback;
  }
};

export const setLocalStorage = (key, value) => JSON.stringify(localStorage.setItem(key, value));
