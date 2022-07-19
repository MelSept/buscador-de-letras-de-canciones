import { useContext } from "react";
import LetterContext from "../context/LettersProvider";

//Este hook nos permite realizar consultar en el provider

const useLetters = () => {
  return useContext(LetterContext);
};

export default useLetters;
