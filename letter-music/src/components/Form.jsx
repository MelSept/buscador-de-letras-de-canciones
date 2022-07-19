import { useState } from "react";
import useLetters from "../hooks/useLetters";

const Form = () => {
  const { setAlert, searchLetter } = useLetters();
  const [search, setSearch] = useState({ artista: "", cancion: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("Coloca nombre de artista y cancion");
      return;
    }
    searchLetter(search);
    // en caso de que se hayan colocado artista y cancion se quita el aviso
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Busca por Artista y Canción</legend>

      <div className="form-grid">
        <div>
          <label>Artista</label>
          <input
            type="text"
            name="artista"
            placeholder="Busca por Artista"
            value={search.artista}
            onChange={(e) =>
              setSearch({
                ...search,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <div>
          <label>Cancion</label>
          <input
            type="text"
            name="cancion"
            placeholder="Nombre cancion"
            value={search.cancion}
            onChange={(e) =>
              setSearch({
                ...search,
                [e.target.name]: e.target.value,
              })
            }
          />
        </div>
        <input type="submit" value="Buscar" />
      </div>
    </form>
  );
};

export default Form;
