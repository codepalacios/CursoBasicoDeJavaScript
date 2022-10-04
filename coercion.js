var a = 20;
var b = a + "";

console.log(b); // Imprimira 20 pero en formato string, con typeof se pude validar

var c = String(a); // Convierte explicitamente tipo entero a string

console.log(c); // Imprime 20 en formato string

var d = Number(c); // Convierte explicitamente tipo string a entero