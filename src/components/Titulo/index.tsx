import React from "react";
import "./Titulo.css";

interface IProps {
  children: string;
}

const Titulo: React.FC<IProps> = ({ children }) => {
  return <h1 className="main-titulo marrom label">{children}</h1>;
};

export default Titulo;
