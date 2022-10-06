// Funcion constructora de un objeto
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// Creando nuevos objetos utilizando new y funcion constructora
var autoNuevo = new auto("Tesla", "Modelo 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corrola", 2020);

// LLamando a los objetos
autoNuevo;
autoNuevo2;
autoNuevo3;

// Reto forma de automtizar (eleccion con uso de un array)
// function auto (MARCA, MODELO, ANNIO){
//     this.marca = MARCA;
//     this.modelo = MODELO;
//     this.annio = ANNIO;
//   }
//   var autos = [];
//   for(let i = 0 ; i < 30 ; i++){
//     var marca = prompt("Ingresa la marca del auto");
//     var modelo = prompt("Ingresa el modelo del auto");
//     var annio = prompt("Ingresa el año del auto");
//     autos.push(new auto (marca, modelo, annio));
//   }
  
//   for(let i = 0 ; i < autos.length ; i++){
//     console.log(autos[i]);
//   }