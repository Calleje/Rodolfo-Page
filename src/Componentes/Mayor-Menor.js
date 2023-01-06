import React from "react";
import { useState } from "react";
import "../Hojas-de-estilo/Mayor-Menor.css";

export default function App() {
  const [b, setb] = useState(5);

  const [c, setc] = useState(Random());

  const [mensaje, setMensaje] = useState();

  function Random() {
    return Math.floor(Math.random() * 10);
  }

  function Mayor(b, c) {
    if (b === c) {
      return setMensaje("juga de nuevo");
    } else if (c > b) {
      return setMensaje("ganaste");
    } else {
      return setMensaje("no ganaste");
    }
  }

  function Menor(b, c) {
    if (b === c) {
      return setMensaje("juga de nuevo");
    } else if (c < b) {
      return setMensaje("ganaste");
    } else {
      return setMensaje("no ganaste");
    }
  }

  const ResultadoMayor = () => {
    setc(Random());
    Mayor(b, c);

    setb(c);
  };

  const ResultadoMenor = () => {
    setc(Random());
    Menor(b, c);

    setb(c);
  };

  return (
    <div className="App">
      <h3>el número actual es: {b} </h3>
      <p>el numero que sigue es: {c} </p>
      <button onClick={ResultadoMayor}> Mayor </button>
      <button onClick={ResultadoMenor}> Menor </button>
      <h4>Resultado: {mensaje}</h4>
    </div>
  );
}
