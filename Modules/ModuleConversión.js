function CelsiousToFahrenheit(celsious) {
    return (celsious * 9 / 5) + 32;
}

function FahrenheitToCelsious(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

export { CelsiousToFahrenheit, FahrenheitToCelsious};