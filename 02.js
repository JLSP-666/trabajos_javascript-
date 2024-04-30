function saludar(nombre) {
    
    const formatoNombre = /^[A-Z][a-z]+$/;

   
    if (formatoNombre.test(nombre)) {
        return 'Hola ${nombre}, bienvenido a mi programa.';
    } else {
        return "Por favor ingresa un nombre válido que inicie con mayúscula y contenga solo letras.";
    }
}


let nombre = '4';
console.log(saludar(nombre));