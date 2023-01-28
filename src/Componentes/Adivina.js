import React from "react";
// import "./styles.css";
import "../Hojas-de-estilo/Adivina.css";

import { useState } from "react";

import Vasoconbola from "../Imagenes/Vaso-Conbola.png";
import Vasosinbola from "../Imagenes/Vaso-Sinbola.png";

export default function Adivina() {
  const [respuesta, setRespuesta] = useState(1);
  const [resultado, setResultado] = useState("Elegí un vaso");

  const [estilo, setEstilo] = useState();
  {
    /*usa este estilo si gana*/
  }

  const [habilitar, setHabilitar] = useState(true);
  {
    /*habilita o desabilita el boton después de elegir una opción*/
  }

  {
    /** tomo la img con clase" vaso-eleccion" y le asigno como src un tipo de vaso segun gana o pierde: */
  }

  let vasoGanador = document.getElementsByClassName("vasos-eleccion");

  {
    /**OCULTAR O MOSTRAR RESULTADO */
  }
  const [show, setShow] = useState(false);

  {
    /**points events */
  }

  function Random() {
    return Math.floor(Math.random() * 3);
  }

  function Resultado(opcion) {
    setShow(true);
    if (opcion === respuesta) {
      setResultado("Ganaste");
      setHabilitar(true);
    } else {
      setResultado("Perdiste");
      setHabilitar(true);
    }
    vasoGanador[respuesta].src = Vasoconbola;
  }

  function Mezclar() {
    vasoGanador[respuesta].src = Vasosinbola;
    setShow(false);
    setRespuesta(Random());
    setHabilitar(false);
  }

  // const vasoGana = {
  //   backgroundColor: "yellow",
  // };

  const disabled = false;

  return (
    <div className="App">
      <button onClick={Mezclar}> Mezclar </button>

      <div className="vasos">
        <div className="vaso">
          <img className="vasos-eleccion" src={Vasosinbola} />
          <button
            disabled={habilitar}
            style={{ estilo }}
            onClick={() => {
              Resultado(0);
            }}
          >
            Vaso 1
          </button>
        </div>

        <div className="vaso">
          <img className="vasos-eleccion" src={Vasosinbola} />
          <button
            disabled={habilitar}
            style={estilo}
            onClick={() => {
              Resultado(1);
            }}
          >
            Vaso 2
          </button>
        </div>

        <div className="vaso">
          <img className="vasos-eleccion" src={Vasosinbola} />
          <button
            disabled={habilitar}
            style={estilo}
            onClick={() => {
              Resultado(2);
            }}
          >
            Vaso 3
          </button>
        </div>
      </div>
      {/* <h3>la respuesta es el botón número: {respuesta}</h3> */}
      {show && <h3 id="bola-resultado">{resultado}</h3>}
    </div>
  );
}
