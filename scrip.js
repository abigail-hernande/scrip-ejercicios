// Ejercicio1:solicite dos numero al usuario y muestre la suma.
const prompt = require('prompt-sync')();
let Num1 = prompt ("indica el primer numero:");
let Num2 = prompt ("indica el segundo numero");
Num1 = Number(Num1);
Num2 = Number(Num2);
 
let suma1 = Num1 + Num2;
console.log("la suma de estos numeros es:" + suma1);

//ejercicio3: Solicite el precio de dos productos y muestre el total a pagar.
 let Producto1 = prompt("ingrese el preciio del primer producto:");
 let  Producto2 = prompt("ingrese el precio del segundo producto:");
 Producto1 = Number(Producto1);
Producto2 = Number(Producto2);
let suma2 = Producto1 + Producto2;
console.log("El total a pagar es de:" + suma2);

//Ejercicio4: Solicite las edades de dos personas y muestre la suma de sus edades.

let Edad1 = prompt("ingrese la primera edad:");
let Edad2 = prompt("ingresa la segunda edad:");
Edad1 = Number(Edad1);
Edad2 = Number(Edad2);
let suma3 = Edad1 + Edad2;
console.log("la suma de estas edades es igual a:" + suma3);

//Ejercicio5: Solicite dos notas de un estudiante y muestre la suma de ambas notas.

 let Nota1 = prompt("ingrese la primera nota:");
 let Nota2 = prompt("ingrese la segunda nota:");
 Nota1 = Number(Nota1);
Nota2 = Number(Nota2);
let suma4 = Nota1 + Nota2;
console.log("¨La suma de las dos notas es:" + suma4);
 
//Ejercicio6: Solicite la cantidad de estudiantes de dos grupos y muestre cuántos estudiantes hay en total.

let grupo1 = Number(prompt("Ingresa la cantidad de estudiantes del grupo 1:"));
let grupo2 = Number(prompt("Ingresa la cantidad de estudiantes del grupo 2:"));
let total1 = grupo1 + grupo2;
console.log("La cantidad total de estudiantes es: " + total1);

//Ejercicio7:Solicite dos cantidades de dinero y muestre cuánto dinero se tiene en total.

let dinero1 = Number(prompt("Ingrese la primera cantidad de dinero: "));
let dinero2 = Number(prompt("Ingrese la segunda cantidad de dinero: "));

let total2 = dinero1 + dinero2;

console.log("El dinero total es: $" + total2);

//edad isnan

let Edad=Number(prompt("indica el numero: "));
if (isNaN(Edad)) {
    console.log("no es un numero");
    
} else {
    console.log("es un numero");
    
}