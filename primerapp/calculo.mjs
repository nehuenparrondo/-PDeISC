const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

// Exportamos las funciones para que otros archivos las vean
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
};