const form = document.getElementById('form');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const address = document.getElementById('direccion');
const ccusuario = document.getElementById('ccusuario');
const pass = document.getElementById('clave');
const valpass = document.getElementById('confirm_clave');
const email = document.getElementById('email');

const botonSi = document.getElementById('boton_si');
const botonNo = document.getElementById('boton_no');
const gustos = Array.from(document.querySelectorAll('.gustos'));

const validarCampos = {
  name: false,
  surname: false,
  address: false,
  ccusuario: false,
  pass: false,
  valpass: false,
  email: false,
};

// Validar formulario.
const validateForm = () => {
  const formValues = Object.values(validarCampos);
  const valid = formValues.findIndex((value) => value === false);
  if (valid === -1) form.submit();
  else alert('¡Formulario Inválido!');
};

// Prevenir el comportamiento por defector del formulario en el submit y llamar a validar.
form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
});

const toggleDisabled = (valcampo, campo) => {
  if (valcampo) campo.nextSibling.classList.add('disabled');
  else campo.nextSibling.classList.remove('disabled');
};

const validateName = (nombre) => {
  if (nombre.length < 0 || nombre.length > 25 || nombre === '') return false;
  return true;
};

const validateAddress = (dir) => {
  const addressRegex = /^(cll|cra|av|anv|trans).+$/gi;
  if (addressRegex.test(dir)) return true;
  return false;
};

const validateUser = (usr) => {
  const usernameRegex = /^[a-zA-Z0-9_-]{10,20}$/;
  if (usernameRegex.test(usr)) return true;
  return false;
};

const validatePassword = (pwd) => {
  const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{15,20}$/;
  if (passwordRegex.test(pwd)) return true;
  return false;
};

const comparePasswords = (valpwd) => {
  if (pass.value !== undefined) {
    if (pass.value.trim() === valpwd) return true;
  }
  return false;
};

const validateEmail = (correo) => {
  const emailRegex = /^(([^<>()\[\]\\.,:\s@']+(\.[^<>()\[\]\\.,:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegex.test(correo)) return true;
  return false;
};

name.addEventListener('change', (e) => {
  validarCampos.name = validateName(e.target.value.trim());
  toggleDisabled(validarCampos.name, name);
});

surname.addEventListener('change', (e) => {
  validarCampos.surname = validateName(e.target.value.trim());
  toggleDisabled(validarCampos.surname, surname);
});

address.addEventListener('change', (e) => {
  validarCampos.address = validateAddress(e.target.value.trim());
  toggleDisabled(validarCampos.address, address);
});

ccusuario.addEventListener('change', (e) => {
  validarCampos.ccusuario = validateUser(e.target.value.trim());
  toggleDisabled(validarCampos.ccusuario, ccusuario);
});

pass.addEventListener('change', (e) => {
  validarCampos.pass = validatePassword(e.target.value.trim());
  toggleDisabled(validarCampos.pass, pass);
});

valpass.addEventListener('change', (e) => {
  validarCampos.valpass = comparePasswords(e.target.value.trim());
  toggleDisabled(validarCampos.valpass, valpass);
});

email.addEventListener('change', (e) => {
  validarCampos.email = validateEmail(e.target.value.trim());
  toggleDisabled(validarCampos.email, email);
});

// Gustos Personales

botonSi.addEventListener('click', () => {
  gustos.forEach((campo) => campo.removeAttribute('disabled'));
});

botonNo.addEventListener('click', () => {
  gustos.forEach((campo) => campo.setAttribute('disabled', ''));
});

// Input range
const inputLeft = document.getElementById('input-left');
const inputRight = document.getElementById('input-right');
const thumbLeft = document.querySelector('.slider > .thumb.left');
const thumbRight = document.querySelector('.slider > .thumb.right');
const range = document.querySelector('.slider > .range');

const setLeftValue = () => {
  const min = parseInt(inputLeft.min, 10);
  const max = parseInt(inputLeft.max, 10);
  inputLeft.value = Math.min(parseInt(inputLeft.value, 10), parseInt(inputRight.value, 10) - 1);

  const percent = ((inputLeft.value - min) / (max - min)) * 100;
  thumbLeft.style.left = `${percent}%`;
  range.style.left = `${percent}%`;
};

setLeftValue();

const setRightValue = () => {
  const min = parseInt(inputRight.min, 10);
  const max = parseInt(inputRight.max, 10);
  inputRight.value = Math.max(parseInt(inputRight.value, 10), parseInt(inputLeft.value, 10) + 1);

  const percent = ((inputRight.value - min) / (max - min)) * 100;

  thumbRight.style.right = `${100 - percent}%`;
  range.style.right = `${100 - percent}%`;
};

setRightValue();

inputLeft.addEventListener('input', setLeftValue);
inputRight.addEventListener('input', setRightValue);

inputLeft.addEventListener('mouseover', () => {
  thumbLeft.classList.add('hover');
});

inputLeft.addEventListener('mouseout', () => {
  thumbLeft.classList.remove('hover');
});

inputLeft.addEventListener('mousedown', () => {
  thumbLeft.classList.add('active');
});

inputLeft.addEventListener('mouseup', () => {
  thumbLeft.classList.remove('active');
});

inputRight.addEventListener('mouseover', () => {
  thumbRight.classList.add('hover');
});
inputRight.addEventListener('mouseout', () => {
  thumbRight.classList.remove('hover');
});
inputRight.addEventListener('mousedown', () => {
  thumbRight.classList.add('active');
});
inputRight.addEventListener('mouseup', () => {
  thumbRight.classList.remove('active');
});
