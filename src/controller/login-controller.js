import loginUserEmail from '../model/register-model.js';
import loginView from '../view/login-view.js';

export default () => {
  loginView();
  const btnLogin = document.querySelector('.btn-login');
  btnLogin.addEventListener('click', () => {
    const email = document.querySelector('#email-login').value;
    const password = document.querySelector('#password-login').value;
    loginUserEmail(email, password);
  });
};
