function divisionPorRestas(dividendo, divisor) {
    let cociente = 0;
    let residuo = dividendo;

    while (residuo >= divisor) {
        residuo -= divisor;
        cociente++;
    }

    if (residuo === 0) {
        return "El resultado de la división es: " + cociente;
    } else {
        return "El resultado de la división es: " + cociente + " y sobran " + residuo;
    }
}


console.log(divisionPorRestas(5, 2));