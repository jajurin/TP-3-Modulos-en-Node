

function validarPassword(password){
console.log("ejercicio:9")
   if (password.length > 8 && password !== password.toLowerCase() && /\d/.test(password)) {
        return true;
    } else {
        return false;
    }
}

export default validarPassword