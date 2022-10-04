console.log(miNombre); //Se imprimira "undefined"

var miNombre = "Chris";

hey(); //Se imprimira el resultado de la funcion
//Si por ejemplo la variable miNombre no tiene valor asigando se imprimiria: Hola undefined.

function hey() {
    console.log("Hola " + miNombre);
}