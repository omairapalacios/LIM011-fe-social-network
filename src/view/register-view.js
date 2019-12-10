import { registerUserEmail } from '../controller/register-controller.js';

export default () => {
  const viewRegister = `
<form action="">
  <input id="email" type="email" placeholder="Correo Electronico">
  <input id="password" type="password" placeholder="Contraseña">
  <button id="btn-register"type="submit">REGISTRAME</button>
</form>
    `;
  const divElem = document.createElement('div');
  divElem.innerHTML = viewRegister;
  const btnRegister = divElem.querySelector('#btn-register');

  btnRegister.addEventListener('click', () => {
    const email = divElem.querySelector('#email').value;
    const password = divElem.querySelector('#password').value;
    const register = registerUserEmail(email, password);
    console.log(register);
  });

  return divElem;
};
