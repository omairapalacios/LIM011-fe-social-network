import { registerUserEmail } from '../model/register-model.js';

export default () => {
  const registerView = `
    <p>Bienvenidx</p>
    <form action="">
      <input id="email-register" type="email" placeholder="Correo Electronico">
      <input id="password-register" type="password" placeholder="Contraseña">
      <button id="btn-register" class="btn-general" type="submit">REGISTRAME</button>
    </form>
    `;
  const divElem = document.createElement('div');
  divElem.innerHTML = registerView;
  const btnRegister = divElem.querySelector('#btn-register');
  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    const email = divElem.querySelector('#email-register');
    const password = divElem.querySelector('#password-register');
    registerUserEmail(email.value, password.value);
    email.value = '';
    password.value = '';
  });
  return divElem;
};
