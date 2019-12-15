import { signInUserEmail, signOutPage } from '../model/login-model.js';

export const signInEmailEvent = () => {
  const btnLogin = document.querySelector('#btn-login');
  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-login');
    const password = document.querySelector('#password-login');
    signInUserEmail(email.value, password.value);
  });
};
export const singOutEmailEvent = () => {
  const btnLogin = document.querySelector('#btn-signout');
  btnLogin.addEventListener('click', () => {
    signOutPage();
  });
};
