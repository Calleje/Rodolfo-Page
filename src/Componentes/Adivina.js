import React from "react";
// import "./styles.css";
import "../Hojas-de-estilo/Adivina.css";

import { useState } from "react";

import Apuesta from "./Apuesta.js";

export default function Adivina() {
  const [respuesta, setRespuesta] = useState(1);
  const [resultado, setResultado] = useState("asdf");

  const [estilo, setEstilo] = useState();
  {
    /*usa este estilo si gana*/
  }

  const [habilitar, setHabilitar] = useState(true);
  {
    /*habilita o desabilita el boton después de elegir una opción*/
  }

  /* para la apuesta que pone en el input */
  const [apuesta, setApuesta] = useState(0);

  function Random() {
    return Math.floor(Math.random() * 3);
  }

  function Resultado(opcion) {
    if (opcion === respuesta) {
      setResultado("Ganaste");
      setEstilo(vasoGana);
      setHabilitar(true);
      <Apostar apuesta="hola" />;
    } else {
      setResultado("Perdiste");
      setHabilitar(true);
      <Apostar apuesta="chau" />;
    }
    //tendria que reiniciar la respuesta para que no siga ganando
  }

  function Mezclar() {
    setRespuesta(Random());
    setHabilitar(false);
    Apostar();
  }

  const vasoGana = {
    backgroundColor: "yellow",
  };

  const disabled = false;

  /* APOSTAR */
  function Apostar() {
    if (apuesta > 0) {
      <Apuesta apostar={apuesta} />;
    } else {
      console.log("es menor a 0");
    }
  }

  return (
    <div className="App">
      {/**APUESTA */}
      <input
        type="number"
        placeholder="Ingrese su apuesta acá"
        onChange={(e) => setApuesta(+e.target.value)}
      />

      <Apuesta apostar="123" />

      {/** FIN APUESTA */}

      <button onClick={Mezclar}> Mezclar </button>

      <div className="vasos">
        <button
          disabled={habilitar}
          style={estilo}
          onClick={() => {
            Resultado(0);
          }}
          className="vaso"
        >
          {" "}
          Boton 1{" "}
        </button>
        <button
          disabled={habilitar}
          style={estilo}
          onClick={() => {
            Resultado(1);
          }}
          className="vaso"
        >
          {" "}
          Boton 2{" "}
        </button>
        <button
          disabled={habilitar}
          style={estilo}
          onClick={() => {
            Resultado(2);
          }}
          className="vaso"
        >
          {" "}
          Boton 3{" "}
        </button>
      </div>
      <h3>la respuesta es el botón número: {respuesta}</h3>
      <h3>{resultado}</h3>
    </div>
  );
}
