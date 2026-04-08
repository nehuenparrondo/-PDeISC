// Definimos las funciones de forma simple
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

// La parte clave: Exportamos un objeto que contiene las 4 funciones
module.exports = { sumar, restar, multiplicar, dividir };