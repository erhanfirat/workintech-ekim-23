import { useState } from "react";

const useLocalStorage = (key, initialData = "") => {
  const [val, setVal] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue) {
      return JSON.parse(localValue);
    }
    return initialData;
  });

  const setLocalState = (newValue) => {
    setVal(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [val, setLocalState];
};

// linting - Ecma Script Linting - ESLint
// hata verecek bir kodlamaÜ;

export default useLocalStorage;
