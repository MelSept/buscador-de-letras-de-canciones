import useLetters from "../hooks/useLetters";

const Letter = () => {
  const { letter, loading } = useLetters();

  return loading ? "Cargando..." : <div className="letra">{letter}</div>;
};

export default Letter;
