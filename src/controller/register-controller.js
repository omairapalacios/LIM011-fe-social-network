import { registerUserEmail } from '../model/register-model.js';

export default () => {
  const btnRegister = document.getElementById('btn-register');
  console.log(btnRegister);
  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-register');
    const password = document.querySelector('#password-register');
    registerUserEmail(email.value, password.value);
    email.value = '';
    password.value = '';
  });
};
