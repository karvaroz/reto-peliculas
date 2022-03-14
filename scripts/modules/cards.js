import { personajes } from "../../data/personajes.js";

const list = personajes;

list.map((personaje) => {
  const img = personaje.image;
  const name = personaje.name;
  const house = personaje.house;
  const species = personaje.species;
  const today = new Date();
  const year = today.getFullYear();
  const yearOfBirth = personaje.yearOfBirth;
  const age = year - personaje.yearOfBirth;
  const alive = personaje.alive == true ? "Vivo" : "Fallecido";
  const personCard = `
  <div id="personCard">
    <img src="${img}" alt="" width="380" height="auto">
    <h2>Nombre: ${name}</h2>
    <h2>Casa: ${house}</h2>
    <h2>Especie: ${species}</h2>
    <h2>Nació: ${yearOfBirth}</h2>
    <h2>Edad: ${age} años</h2>
    <h2>Estado: ${alive}</h2>
    </div>
  `;

  document.getElementById("cards").innerHTML += personCard;
});
