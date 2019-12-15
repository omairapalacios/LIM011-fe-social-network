import { registerUserEmail } from '../model/register-model.js';

export default () => {
  const btnRegister = document.getElementById('btn-register');
  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-register');
    const password = document.querySelector('#password-register');
    const username = document.querySelector('#username');
    registerUserEmail(email.value, password.value, username.value);
    email.value = '';
    password.value = '';
    username.value = '';
  });
};
