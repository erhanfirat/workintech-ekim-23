import { useState } from "react";

const useInput = (initialValue = "") => {
  const [val, setVal] = useState(initialValue);

  const inputChangeHandler = (event) => {
    const { type, value, checked } = event.target;

    setVal(type === "checkbox" ? checked : value);
  };

  return [val, inputChangeHandler];
};

export default useInput;
