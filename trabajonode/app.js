const http = require('http');
const url = require('url');
const calculo = require('./calculo');
const obtenerMenu = require('./menu');

// Punto 4: Manejo de upper-case
let upperCase;
try {
    upperCase = require('upper-case').upperCase;
} catch (e) {
    upperCase = (str) => str.toUpperCase();
}

http.createServer((req, res) => {
    const direccion = url.parse(req.url, true);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    let htmlFinal = obtenerMenu();

    if (direccion.pathname === '/') {
        htmlFinal += `<h1>Panel de Control</h1>
                      <div class="card">
                        <p style="text-align: center; font-size: 1.2rem;">
                            bienvenido profe, este es el intento numero 5 de aprobar un tp.espero que te guste :)
                        </p>
                      </div>`;
    } 
    else if (direccion.pathname === '/calculo') {
        // Valores de prueba
        const n1 = 100;
        const n2 = 5;

        htmlFinal += `<h1>Operaciones Matemáticas</h1>
                      <div class="card"><span class="label">Suma:</span> ${n1} + ${n2} = ${calculo.sumar(n1, n2)}</div>
                      <div class="card"><span class="label">Resta:</span> ${n1} - ${n2} = ${calculo.restar(n1, n2)}</div>
                      <div class="card"><span class="label">Multiplicación:</span> ${n1} x ${n2} = ${calculo.multiplicar(n1, n2)}</div>
                      <div class="card"><span class="label">División:</span> ${n1} / ${n2} = ${calculo.dividir(n1, n2)}</div>`;
    } 
    else if (direccion.pathname === '/url-info') {
        htmlFinal += `<h1>Datos de Conexión</h1>
                      <div class="card"><span class="label">Host:</span> ${req.headers.host}</div>
                      <div class="card"><span class="label">Ruta:</span> ${direccion.pathname}</div>`;
    } 
    else if (direccion.pathname === '/npm-test') {
        const txt = "texto procesado por npm";
        htmlFinal += `<h1>Prueba de NPM</h1>
                      <div class="card">
                        <p class="label">Original:</p> <p>${txt}</p>
                        <p class="label">Resultado:</p> <p>${upperCase(txt)}</p>
                      </div>`;
    } 
    else if (direccion.pathname === '/contacto') {
        htmlFinal += `<h1>Información</h1>
                      <div class="card" style="text-align: center;">
                        <p><b>Escuela Técnica N°5</b></p>
                        <p>Especialidad: Programación</p>
                      </div>`;
    } 
    else {
        htmlFinal += `<div class="card"><h1>404</h1><p>Página no encontrada.</p></div>`;
    }

    htmlFinal += `</div></body></html>`;
    res.end(htmlFinal);

}).listen(8080);

console.log("Servidor iniciado en http://localhost:8080");