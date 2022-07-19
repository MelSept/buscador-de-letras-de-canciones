import React from "react";

//Pasa todo el contenido de ese componente con "children"

const Alert = ({ children }) => {
  return <div className="alerta">{children}</div>;
};

export default Alert;
