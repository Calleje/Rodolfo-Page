import { useState } from "react";
import "../Hojas-de-estilo/Piedra-Papel-Ronchi.css";

export default function App() {
  const [maquina, setMaquina] = useState("asfd");
  const [usuario, setUsuario] = useState("qwer");

  const [resultado, setResultado] = useState("zxcv");

  function Random() {
    return Math.floor(Math.random() * 3);
  }

  function EleccionMaquina() {
    if (Random() === 0) {
      setMaquina("Piedra");
    } else if (Random() === 1) {
      setMaquina("Papel");
    } else {
      setMaquina("Tijeras");
    }
  }

  function Resultado() {
    if (usuario === maquina) {
      setResultado("Empate");
    } else if (usuario === "Piedra") {
      if (maquina === "Papel") {
        setResultado("Compu gano");
      } else {
        setResultado("Ganaste");
      }
    }

    // Usuario = papel
    else if (usuario === "Papel") {
      if (maquina === "Tijeras") {
        setResultado("Compu gano");
      } else {
        setResultado("Ganaste");
      }
    }

    //Usuario = Tijeras
    else if (usuario === "Tijeras") {
      if (maquina === "Piedra") {
        setResultado("Compu gano");
      } else {
        setResultado("Ganaste");
      }
    }
  }
  
  /** SEPARADOOOOOOOOOOOOOOOOOOOOOOOOOOOR */  
  
  return (
    <div className="App">
    
      <h2>maquina: {maquina} </h2>
      <h2>usuario: {usuario}</h2>
      <h2>resultado: {resultado}</h2>
      
      <button
        onClick={() => {
          EleccionMaquina();
          setUsuario("Piedra");
        }}
      >
        Piedra
      </button>
      <button
        onClick={() => {
          EleccionMaquina();
          setUsuario("Papel");
        }}
      >
        Papel
      </button>
      <button
        onClick={() => {
          EleccionMaquina();
          setUsuario("Tijeras");
        }}
      >
        Tijeras
      </button>

      <button onClick={Resultado}>Jugar</button>
    </div>
  );
}
