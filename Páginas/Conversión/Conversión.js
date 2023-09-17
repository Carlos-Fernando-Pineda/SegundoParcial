import { ModuleConversión } from "../../Modules/Agregador.js";

const { CelsiousToFahrenheit, FahrenheitToCelsious } = ModuleConversión;

function convertTemperature() {
  const inputTemperature = parseFloat(document.getElementById('input-temperature').value);
  const inputUnit = document.getElementById('input-unit').value;
  const outputUnit = document.getElementById('output-unit').value;
  let result;

  if (inputUnit === 'celsious' && outputUnit === 'fahrenheit') {
    result = CelsiousToFahrenheit(inputTemperature);
  } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsious') {
    result = FahrenheitToCelsious(inputTemperature);
  } else {
    result = inputTemperature;
  }

  document.getElementById('result').textContent = result.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
  const convertButton = document.getElementById('convert-button');
  convertButton.addEventListener('click', convertTemperature);
});