import registerUserEmail from '../model/register-model.js';
import registerView from '../view/register-view';

export default () => {
  registerView();
  const btnRegister = document.querySelector('button');
  btnRegister.addEventListener('click', () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    registerUserEmail(email, password);
  });
};
