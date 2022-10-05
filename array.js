var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas); // Imprimiendo en consola el array

console.log(frutas.length); // Imprimiendo la longitud del array

var masFruta = frutas.push("Uvas"); // Agrega elementos al final del array

var ultimo = frutas.pop("Uvas"); // Elimina el ultimo elemento del array

var nuevaLongitud = frutas.unshift("Uvas"); // Agrega elementos al inicio del array

var borrarFruta = frutas.shift("Uvas"); // Elimina el primer elemento del array (el primero)

var posicion = frutas.indexOf("Cereza"); // Retorna el index de ubicación del elemento en el array
