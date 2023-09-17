// calculadora-html/calculadora-app.js

import { sumar, restar, multiplicar, dividir } from '../../Modules/Agregador.js';

function realizarOperacion(operacion) {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    let resultado;
    if (operacion === 'sumar') {
        resultado = sumar(numero1, numero2);
    } else if (operacion === 'restar') {
        resultado = restar(numero1, numero2);
    } else if (operacion === 'multiplicar') {
        resultado = multiplicar(numero1, numero2);
    } else if (operacion === 'dividir') {
        resultado = dividir(numero1, numero2);
    }

    document.getElementById("resultado").textContent = resultado;
}
