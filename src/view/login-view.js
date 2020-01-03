
import {
  signInEmailEvent, signGoogleEvent, signFacebookEvent, passwordShow,

} from '../controller/login-controller.js';

export default () => {
  const loginView = `
    <section class='section-logo'>
      <img src='./img/logo.png' alt='logo'>
    </section>
    <p>¡Bienvenidx!</p>
    <form action=''>
      <input type='email' id='email-login' placeholder='Email' required>
      <div class=input-pass> 
      <input type='password' id='password-login' placeholder='Password' required>
      <a id="show-eye> <img src="https://img.icons8.com/material-sharp/24/000000/sleepy-eyes.png"></a>
      </div>
      <button id='btn-login' class='btn-general' type='submit'>INGRESAR</button>
      <span class='errors' id='error-email'></span>
      <span class='errors' id='error-message'></span>
      <span class='errors' id='error-password'></span>
      <span class='errors' id='error-email'></span>
    </form>
      <p>Ó bien ingresa con...</p>
      <button id='btn-facebook' class='btn-social-net' type='submit' ><img class='btn-social-icon' src='../img/facebook.png' alt='facebook'></button>
      <button id='btn-google' class='btn-social-net' type='submit'><img class='btn-social-icon' src='../img/google.png' alt='gmail'></button>
      <p>¿No tienes una cuenta? <a href='#/register'>Regístrate</a></p>`;

  const mainElem = document.createElement('main');
  mainElem.className = 'viewLogin';
  mainElem.innerHTML = loginView;

  // MANEJO DE DOM (eventos)
  const btnLogin = mainElem.querySelector('#btn-login');
  btnLogin.addEventListener('click', signInEmailEvent);
  const btnFacebook = mainElem.querySelector('#btn-facebook');
  btnFacebook.addEventListener('click', signFacebookEvent);
  const btnGoogle = mainElem.querySelector('#btn-google');
  btnGoogle.addEventListener('click', signGoogleEvent);
  const showEye = mainElem.querySelector('#show-eye');
  showEye.addEventListener('click', passwordShow);

  return mainElem;
};
