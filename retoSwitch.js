var eleccionUsuario; // Asigna para usuario una valor: piedra, papel o tiejera.
var eleccionPC; // Asigna para PC una valor: piedra, papel o tijera.
var jugar = true;

switch (jugar) {
    case eleccionUsuario == "piedra" && eleccionPC == "tijera":
        console.log("Ganaste");
        break;
    case eleccionUsuario == "papel" && eleccionPC == "piedra":
        console.log("Ganaste");
        break;
    case eleccionUsuario == "tijera" && eleccionPC == "papel":
        console.log("Ganaste");
        break;
    case eleccionUsuario == eleccionPC:
        console.log("Empate");
        break;
    default:
        console.log("Por favor ingrese un valor de: piedra, papel o tijera.");
        break;
}