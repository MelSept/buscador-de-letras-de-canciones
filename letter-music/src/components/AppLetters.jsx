import Form from "./Form";
import useLetters from "../hooks/useLetters";
import Alert from "./Alert";
import Letter from "./Letter";

const AppLetters = () => {
  const { alert, letter, loading } = useLetters();
  return (
    <>
      <header>Búsqueda de Letras de Canciones</header>
      <Form />

      <main>
        {alert ? (
          <Alert>{alert}</Alert>
        ) : letter ? (
          <Letter />
        ) : loading ? (
          "Cargando..."
        ) : (
          <p className="text-center"> Busca letras de tus artistas favoritos</p>
        )}
      </main>
    </>
  );
};

export default AppLetters;
