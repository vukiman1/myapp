// Safe localStorage wrapper that works with SSR
const isClient = typeof window !== "undefined";

const setMany = (keys: string[], values: string[]) => {
  if (!isClient) return [];
  return keys.map((key, index) => localStorage.setItem(key, values[index]));
};

const deleteMany = (keys: string[]) => {
  if (!isClient) return;
  keys.forEach((key) => {
    localStorage.removeItem(key);
  });
};

const getMany = (keys: string[]) => {
  if (!isClient) return keys.map(() => null);
  return keys.map((key) => localStorage.getItem(key));
};

export { setMany, deleteMany, getMany };
