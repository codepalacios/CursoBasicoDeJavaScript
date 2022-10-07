var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 1000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
];

// Metodo filter, esta función ira filtrando por articulos y devolvera objetos en un nuevo array.
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

// Metodo map, esta función devuelve resultados en un array nuevo de todos los elementos. Mapea.
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});