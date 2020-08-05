function validar25caracteres(valinput){
    var retorno = false;
    if (valinput == ""){
        alert("Debe escribir un nombre y un apellido.");
    } else if (valinput.length > 25) {
        alert("El nombre y apellido debe tener como máximo 25 caracteres.");
    } else {retorno = true;}
    return retorno;
};

function validarClave(valinput){
    var retorno = false;
    if (valinput == ""){
        alert("Debe ingresar una contraseña.");
    } else if (valinput.length < 15){
        alert("La contraseña debe tener al menos 15 caracteres.");
    } else if (valinput.length > 20){
        alert("La contraseña debe tener máximo 20 caracteres.");
    } else if (valinput.search(/[A-Z]/)<0){
        alert("La contraseña debe tener al menos un caracter en mayúscula.");
    } else if (valinput.search(/[0-9]/)<0){
        alert("La contraseña debe tener al menos un número.");
    } else if (valinput.search(/[#,%,/,&]/)<0){
        alert("La contraseña debe contener al menos uno de los siguientes caracteres: #,%,/,&.");
    } else {retorno = true};
    return retorno;
};

function validarCampos() {
    var retorno = false;
    var nombre = document.getElementById("nombre");
    retorno = validar25caracteres(nombre.value);
    var apellido = document.getElementById("apellido");
    retorno = validar25caracteres(apellido.value);
    var username = document.getElementById("username").value;
    if (username == ""){
        alert("Debe ingresar un usuario.");
    } else if (username.length < 10){
        alert("El usuario debe tener al menos 10 caracteres.");
    } else if (usuario.length > 20){
        alert("El usuario debe tener máximo 20 caracteres.");
    } else if (!(usuario.search(/[#,%,/,&]/)<0)){
        alert("El usuario no puede contener caracteres especiales.");
    } else {retorno=true};
    var clave = document.getElementById("clave");
    retorno = validarClave(clave.value);
    var confirm_clave = document.getElementById("confirm_clave");
    if(confirm_clave.value!=clave.value){alert("Las contraseñas deben coincidir.");};
    var email = document.getElementById("email").value;
    if (email==""){alert("Debe ingresar un correo.")}
    else if(email.length > 120){alert("El correo debe tener máximo 120 caracteres.");};
    return retorno;
};

function getAge() {
    var today = new Date();
    var birthDate = new Date(fecha());
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    document.getElementById('edad').innerHTML = age;
};

function fecha(){
    var fecha = document.getElementById('cumpleanos').value;
    return fecha;
};