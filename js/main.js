//EJERCICION 1 
/*
const alumno = {
    nombre: "Juan",
    ingles: 5,
    programacion: 7,
    html: 8,
    media(){
    (alumno.ingles+alumno.programacion+alumno.html)/3;
    }
};

console.log(alumno.nombre + " tiene una nota media de "+ media);

//EJERCICIO 2 
const vestido = {
    precio: precio,
    descuento: descuento,
}

//EJERCICIO 3 
class Piedra {
    constructor (masa, volumen){
        this.masa = masa;
        this.volumen = volumen;
    }
    densidad= function(){
        return this.masa/this.volumen
    }
}
const piedra1 = new Piedra(194, 10);
console.log("densidad = "+ piedra1.densidad())

//EJERCICIO 4
class Cuenta {
    constructor(nombreTitular, saldo){
        this.nombreTitular = nombreTitular;
        this.saldo = saldo;
    }
    ingresar(ingreso){
        this.saldo += ingreso;
        return this.saldo;
    }
    retirar(egreso){
        this.saldo -= egreso;
        return this.saldo;
    }
};
const cuenta1 =  new Cuenta ("Jose", 1000)
 console.log(cuenta1.ingresar(1000));
 console.log(cuenta1.retirar(100));
*/
//EJERCICIO 5 
class Ficha {
    constructor(nombre, sesion, numSesiones){
        this.nombre = nombre;
        this.sesion= sesion; 
        this.numSesiones= [];
    }
    anotar(sesiones){
        this.numSesiones.push(sesiones);
    }
    media(){
        return (8+10+6)/3; 
        //recoger los datos del array
    }
}
const persona1 = new Ficha("Jose", 8, 3);
persona1.anotar(10);
persona1.anotar(6);
console.log(persona1.media());