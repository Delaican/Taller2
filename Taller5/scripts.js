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
