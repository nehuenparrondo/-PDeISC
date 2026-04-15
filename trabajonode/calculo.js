// calculo.js
module.exports = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => (b !== 0 ? a / b : "Error")
};