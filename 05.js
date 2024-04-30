function factorial(numero) {
    let resultado = 1;
    let factorialString = numero.toString();

    for (let i = numero; i > 1; i--) {
        resultado *= i;
        factorialString += "x" + (i - 1);
    }

    return factorialString + " = " + resultado;
}


console.log(factorial(10));