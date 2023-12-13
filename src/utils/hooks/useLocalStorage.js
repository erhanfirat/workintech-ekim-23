import { useState } from "react";

const useLocalStorage = (key, initialData = "") => {
  const [val, setVal] = useState(localStorage.getItem(key) || initialData);

  const setLocalState = (newValue) => {
    setVal(newValue);
    localStorage.setItem(key, newValue);
  };

  return [val, setLocalState];
};

export default useLocalStorage;
