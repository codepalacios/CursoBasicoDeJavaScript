var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 1000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
];

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre ==="Laptop";
});

// No crear un array nuevo solo corre sobre el ya existente
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// Regresa true o false
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

// A modo de recopilación:

// find() : Devuelve el primer elemento del array que cumpla con la condición dada
// foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
// some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
// filter() : Devuelve todos los elementos del array que cumplan con la condición dada
// Validar documentacion original para mas detalles