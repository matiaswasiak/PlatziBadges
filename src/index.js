// const element = document.createElement("h1");
// element.innerHTML = "Hello, Platzi Badges!";

// const container = document.getElementById("app");

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

// const jsx = <h1>Hello, Platzi Badges from React!</h1>;
// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Ir a Platzi"
// );
// const name = "Matias";
// const element = React.createElement("h1", {}, `Hola, soy ${name}`);
const jsx = (
  <div>
    <h1>Hola, soy Matías!</h1>
    <p>Soy ingeniero frontend.</p>
  </div>
);

const element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Hola, soy Matías!"),
  React.createElement("p", {}, "Soy ingeniero de la web")
);

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
