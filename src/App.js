import "./styles.css";
import Adivina from "./Componentes/Adivina.js";

import Apuesta from "./Apuesta.js";
import { useState } from "react";

export default function App() {
  const [apostar, setApostar] = useState(0);

  return (
    <div className="App">
      <div className="contenedor-inicio">
        <h1>
          Welcome to <br /> Rodolfo page
        </h1>
        <h2>El lugar donde sucede la magia</h2>
        <h2>PROBANDING</h2>
      </div>

      {/**PROBANDO APUESTA  */}
      <div>
        <input type="number" onChange={(e) => setApostar(+e.target.value)} />
        <Apuesta apostado={apostar} />
      </div>
      {/**PROBANDO APUESTA  */}

      <div className="contenedor-divisor">
        <h2>¿Que carajos es esto?</h2>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </article>
      </div>

      <div className="contenedor-divisor">
        <h2> Rodolfokeins? </h2>
        <article>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </article>
      </div>

      <div className="contenedor-divisor">
        <h2>Adivina donde esta la bola</h2>
        <article> asdf sad fasd f</article>
        <Adivina />
      </div>
    </div>
  );
}
