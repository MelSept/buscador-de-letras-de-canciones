import { useState, createContext } from "react";
const LetterContext = createContext();
import axios from "axios";

const LettersProvider = ({ children }) => {
  const [alert, setAlert] = useState("");
  const [letter, setLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const searchLetter = async (search) => {
    setLoading(true);
    try {
      const { artista, cancion } = search;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const { data } = await axios.get(url);
      setLetter(data.lyrics);
      setAlert("");
    } catch (error) {
      setAlert("Cancion no encontrada");
    }
    setLoading(false);
  };

  return (
    <LetterContext.Provider
      value={{
        alert,
        setAlert,
        searchLetter,
        letter,
        loading,
      }}
    >
      {children}
    </LetterContext.Provider>
  );
};

export { LettersProvider };
export default LetterContext;
