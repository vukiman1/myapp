const setMany = (keys: string[], values: string[]) => {
  return keys.map((key, index) => localStorage.setItem(key, values[index]));
};

const deleteMany = (keys: string[]) => {
  keys.forEach((key) => {
    localStorage.removeItem(key);
  });
};

const getMany = (keys: string[]) => {
  return keys.map((key) => localStorage.getItem(key));
};

export { setMany, deleteMany, getMany };
