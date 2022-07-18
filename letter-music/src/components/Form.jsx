import { useState } from "react";

const Form = () => {
  const [search, setSearch] = useState({ artista: "", cancion: "" });
  return (
    <form>
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
