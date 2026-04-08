// 1. Traemos (importamos) el módulo que creamos antes
const calc = require('./calculos.js');

// 2. Usamos las funciones a través de la variable 'calc'
console.log("Suma (5+3):", calc.sumar(5, 3));
console.log("Resta (8-6):", calc.restar(8, 6));
console.log("Multiplicación (3*11):", calc.multiplicar(3, 11));
console.log("División (30/5):", calc.dividir(30, 5));