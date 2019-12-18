import registerUserEmailEvent from '../controller/register-controller.js';

export default () => {
  const formElement = document.createElement('form');
  formElement.className = 'form-register';
  const registerView = ` 
    <p> Bienvenid@</p>
    <input id = "username" type = "text" placeholder ="Nombre de usuario">
    <label id="error-password" for=""></label>
    <input id = "email-register" type = "text" placeholder = "Correo Electrónico">
    <label id="error-email" for=""></label>
    <input id="password-register" type="password" placeholder="Contraseña">
    <button id = "btn-register" class = "btn-general" type = "submit"> REGISTRARME </button>
    `;
  formElement.innerHTML = registerView;
  // MANEJO DE DOM (eventos)
  const btnRegister = formElement.querySelector('button');
  // eslint-disable-next-line no-undef
  btnRegister.addEventListener('click', registerUserEmailEvent);
  return formElement;
};
