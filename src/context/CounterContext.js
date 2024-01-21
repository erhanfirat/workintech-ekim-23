import { createContext, useEffect, useState } from "react";

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [artisMiktari, setArtisMiktari] = useState(1);
  const [taneFiyat, setTaneFiyat] = useState(5);
  const [toplamFiyat, setToplamFiyat] = useState(0);

  useEffect(() => {
    setToplamFiyat(counter * taneFiyat);
  }, [counter, taneFiyat]);

  return (
    <CounterContext.Provider
      value={{
        counter,
        setCounter,
        artisMiktari,
        setArtisMiktari,
        taneFiyat,
        setTaneFiyat,
        toplamFiyat,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
