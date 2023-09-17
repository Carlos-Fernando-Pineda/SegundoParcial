import {ModuleContra} from '../../Modules/Agregador.js';

const {GenContra} = ModuleContra;

function GenContraPersonalizada() {
    const DatosUsuario = {
        Name: document.getElementById('Name').value,
        FavoriteColor: document.getElementById('FavoriteColor').value,
        FavoriteNumber: document.getElementById('FavoriteNumber').value,
        FavoriteFood: document.getElementById('FavoriteFood').value
    };
    const Contraseña = GenContra(DatosUsuario);
    document.getElementById('Contra').textContent = Contraseña;
}

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generateButton');+
    generateButton.addEventListener('click', GenContraPersonalizada);
});