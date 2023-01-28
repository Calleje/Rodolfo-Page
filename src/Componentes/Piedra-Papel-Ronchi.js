import { useState } from "react";
import "../Hojas-de-estilo/Piedra-Papel-Ronchi.css";

export default function App() {
  const [maquina, setMaquina] = useState("asfd");
  const [usuario, setUsuario] = useState(
    "Elegi una opción, dale no seas boludo"
  );

  const [resultado, setResultado] = useState("zxcv");

  {
    /** Para mostrar u ocultar un tag */
  }
  const [show, setShow] = useState(false);

  function Random() {
    return Math.floor(Math.random() * 3);
  }

  function EleccionMaquina() {
    if (Random() === 0) {
      setMaquina("Piedra");
    } else if (Random() === 1) {
      setMaquina("Papel");
    } else {
      setMaquina("Ronchi");
    }
  }

  function Resultado() {
    setShow(true);
    if (usuario === maquina) {
      setResultado("Empate");
    } else if (usuario === "Piedra") {
      if (maquina === "Papel") {
        setResultado("Perdiste :(");
      } else {
        setResultado(
          "¡Ganaste! - La piedra le pegó en la cabeza a Ronchi causandole una conmoción cerebral"
        );
      }
    }

    // Usuario = papel
    else if (usuario === "Papel") {
      if (maquina === "Ronchi") {
        setResultado("Perdiste :( - Ronchi le gana a cualquier papel");
      } else {
        setResultado("¡Ganaste!");
      }
    }

    //Usuario = Ronchi
    else if (usuario === "Ronchi") {
      if (maquina === "Piedra") {
        setResultado(
          "Perdiste :( - La piedra le pegó en la cabeza a Ronchi causandole una conmoción cerebral"
        );
      } else {
        setResultado("¡Ganaste! - Ronchi le gana a cualquier papel");
      }
    }
  }

  /** SEPARADOOOOOOOOOOOOOOOOOOOOOOOOOOOR */

  return (
    <div className="App">
      <h2 className="texto-PPR">{usuario}</h2>
      <button
        onClick={() => {
          EleccionMaquina();
          setUsuario("Piedra");
          setShow(false);
        }}
      >
        Piedra
      </button>
      <button
        onClick={() => {
          EleccionMaquina();
          setUsuario("Papel");
          setShow(false);
        }}
      >
        Papel
      </button>
      <button
        onClick={() => {
          EleccionMaquina();
          setUsuario("Ronchi");
          setShow(false);
        }}
      >
        Ronchi
      </button>

      <button onClick={Resultado}>Jugar</button>

      {show && <h2 className="texto-PPR">Rodolfo eligio: {maquina} </h2>}
      {/* <h2 className="texto-PPR">usuario: {usuario}</h2> */}

      {show && <h2 className="texto-PPR">{resultado}</h2>}
    </div>
  );
}
