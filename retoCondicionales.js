var eleccionUsuario = ""; // Ingresa para usuario una opción: piedra, papel o tiejera.
var eleccionPC = ""; // Ingresa para PC una opción: piedra, papel o tijera.

if (eleccionUsuario == "piedra") {
  if (eleccionPC == "papel") {
    console.log("Perdiste");
  } else if (eleccionPC == "tijera") {
    console.log("Ganaste");
  } else {
    console.log("Empate");
  }
} else if (eleccionUsuario == "papel") {
  if (eleccionPC == "piedra") {
    console.log("Ganaste");
  } else if (eleccionPC == "tijera") {
    console.log("Perdiste");
  } else {
    console.log("Empate");
  }
} else if (eleccionUsuario == "tijera") {
  if (eleccionPC == "piedra") {
    console.log("Perdiste");
  } else if (eleccionPC == "papel") {
    console.log("Ganaste");
  } else {
    console.log("Empate");
  }
} else {
  console.log("Por favor ingrese una opción valida o correcta");
}
