const afirmativo = document.getElementById('si');
const negativo = document.getElementById('no');
const selects = document.getElementsByClassName('form__select');
const inputs = document.querySelectorAll(".gustos_personales input")

console.log(inputs);

afirmativo.addEventListener('click', () => {
    for (i = 0; i <= inputs.length; i++) {
        inputs[i].removeAttribute("disabled");
    }
});

afirmativo.addEventListener('click', () => {
    for (i = 0; i <= selects.length; i++) {
        selects[i].removeAttribute("disabled");
    }
});

negativo.addEventListener('click', () => {
    for (i = 0; i <= inputs.length; i++) {
        inputs[i].setAttribute("disabled", "");
    }
});

negativo.addEventListener('click', () => {
    for (j = 0; j <= selects.length; j++) {
        selects[j].setAttribute("disabled", "");
    }
});

function validar25caracteres(valinput){
    if (valinput == ""){
        alert("Debe rellenar este campo");
        valinput.focus();
        valinput.select();
        return false;
    } else if (valinput.length > 25) {
        alert("El campo debe tener como máximo 25 caracteres");
        valinput.focus();
        valinput.select();
        return false;
    } else {return true;}
};

function validarCampos() {
    var retorno;
    var nombre = document.getElementById("nombre");
    retorno = validar25caracteres(nombre.value);
    var apellido = document.getElementById("apellido");
    retorno = validar25caracteres(apellido.value);
};

//validarCampos();