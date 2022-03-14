let divWelcome = document.getElementById("welcome");

document.addEventListener("DOMContentLoaded", () => {
  let name = localStorage.getItem("nombreUsuario");
  divWelcome.innerHTML = `<h1>Hola ${name}, bienvenid@ al mundo mágico de Harry Potter</h1>`;
});
