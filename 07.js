function validarPassword(password) {

    if (password.replace(/\s/g, '').length < 8) {
        return false;
    }
    
   
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    
   
    if (!/\d/.test(password)) {
        return false;
    }
    

    return true;
}

var password = "kazcxcL*687678h";
if (validarPassword(password)) {
    console.log("El password es válido.");
} else {
    console.log("El password no es válido.");
}
