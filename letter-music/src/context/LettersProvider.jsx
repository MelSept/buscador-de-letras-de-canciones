import { useState, createContext } from "react";
const LetterContext = createContext();

const LettersProvider = ({ children }) => {
  return <LetterContext.Provider value={{}}>{children}</LetterContext.Provider>;
};

export { LettersProvider };
export default LetterContext;
