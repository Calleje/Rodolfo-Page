import React from "react";
// import "./styles.css";
import "../Hojas-de-estilo/Adivina.css";

import { useState } from "react";

import Vasoconbola from "../Imagenes/Vaso-Conbola.png";
import Vasosinbola from "../Imagenes/Vaso-Sinbola.png";

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

  const [vaso, setVaso] = useState();

  function Random() {
    return Math.floor(Math.random() * 3);
  }

  function Resultado(opcion) {
    if (opcion === respuesta) {
      setResultado("Ganaste");
      setEstilo(vasoGana);
      setHabilitar(true);
    } else {
      setResultado("Perdiste");
      setHabilitar(true);
    }
    //tendria que reiniciar la respuesta para que no siga ganando
  }

  function Mezclar() {
    setRespuesta(Random());
    setHabilitar(false);
  }

  const vasoGana = {
    backgroundColor: "yellow",
  };

  const disabled = false;

  return (
    <div className="App">
      <button onClick={Mezclar}> Mezclar </button>

      <div className="vasos">
        <div className="vaso">
          <img src={Vasosinbola} />
          <button
            disabled={habilitar}
            style={estilo}
            onClick={() => {
              Resultado(0);
            }}
          >
            {" "}
            Boton 1{" "}
          </button>
        </div>

        <div className="vaso">
          <img src={Vasosinbola} />
          <button
            disabled={habilitar}
            style={estilo}
            onClick={() => {
              Resultado(1);
            }}
          >
            {" "}
            Boton 2{" "}
          </button>
        </div>

        <div className="vaso">
          <img src={Vasosinbola} />
          <button
            disabled={habilitar}
            style={estilo}
            onClick={() => {
              Resultado(2);
            }}
          >
            {" "}
            Boton 3{" "}
          </button>
        </div>
      </div>
      <h3>la respuesta es el botón número: {respuesta}</h3>
      <h3>{resultado}</h3>
    </div>
  );
}
