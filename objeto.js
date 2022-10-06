var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

miAuto; // LLamando todo el objeto
miAuto.marca; // LLamando solo una propiedad del objeto
miAuto.detalleDelAuto(); // LLamando un metodo del objeto