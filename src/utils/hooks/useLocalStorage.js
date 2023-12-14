import { useState } from "react";

const useLocalStorage = (key, initialData = "") => {
  const [val, setVal] = useState(localStorage.getItem(key) || initialData);

  const setLocalState = (newValue) => {
    setVal(newValue);
    localStorage.setItem(key, newValue);
  };

  return [val, setLocalState];
};

// linting - Ecma Script Linting - ESLint
// hata verecek bir kodlamaÜ;


export default useLocalStorage;
