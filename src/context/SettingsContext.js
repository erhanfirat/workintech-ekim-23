import { Children, createContext, useState } from "react";
import useLocalStorage from "../utils/hooks/useLocalStorage";
import { addBusinessDays, addSeconds } from "date-fns";

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  const [lang, setLang] = useLocalStorage("lang", "tr");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <SettingsContext.Provider value={{ lang, setLang, theme, setTheme }}>
      {children}
    </SettingsContext.Provider>
  );
};
