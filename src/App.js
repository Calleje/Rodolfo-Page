import "./styles.css";
import Adivina from "./Componentes/Adivina.js";
import MayorMenor from "./Componentes/Mayor-Menor.js";
import PPR from "./Componentes/Piedra-Papel-Ronchi.js";

import Gotas from "./Imagenes/Gotas.svg";

export default function App() {
  return (
    <div className="App">
      <div className="contenedor-inicio">
        <div className="contenedor-inicio-texto">
          <h2>Welcome to</h2>
          <h1>RODOLFO</h1>
          <h3>page</h3>
        </div>
      </div>

      <div className="contenedor-divisor introduccion">
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

      <div className="contenedor-divisor moneda">
        <img src={Gotas} />
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

      <div className="contenedor-divisor">
        <h2>Mayor o menor</h2>
        <article> asdf sad fasd f</article>
        <MayorMenor />
      </div>

      <div className="contenedor-divisor">
        <h2>Mayor o menor</h2>
        <article> asdf sad fasd f</article>
        <PPR />
      </div>
    </div>
  );
}
