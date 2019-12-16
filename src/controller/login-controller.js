import { signInUserEmail, signInUserGoogle } from '../model/login-model.js';


export const signInEmailEvent = () => {
  const btnLogin = document.querySelector('#btn-login');
  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-login');
    const password = document.querySelector('#password-login');
    signInUserEmail(email.value, password.value);
  });


  const btnGoogle = document.querySelector('#btn-google');
  btnGoogle.addEventListener('click', () => {
    signInUserGoogle();
  });
};
