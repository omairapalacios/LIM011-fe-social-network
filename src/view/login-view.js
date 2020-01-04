import { signInEmailEvent, signGoogleEvent, signFacebookEvent } from '../controller/login-controller.js';

export default () => {
  const loginView = `
    <section class='section-banner'>
      <div class='container-banner'>
        <p> Sé parte de esta red, promociona y encuentra talento </p>
      </div>      
    </section>
    <section class='section-main'>
      <div class='container-logo'>
        <img src='./img/logo.png' alt='logo' class='icon-logo-main'>
      </div>
      <p>¡Bienvenidx!</p>
      <form action='' class='form'>
        <input type='email' id='email-login' placeholder='Email' required>
        <input type='password' id='password-login' placeholder='Password' required>
        <button id='btn-login' class='btn btn-general' type='submit'>INGRESAR</button>
        <span class='errors' id='error-email'></span>
        <span class='errors' id='error-message'></span>
        <span class='errors' id='error-password'></span>
        <span class='errors' id='error-email'></span>
      </form>
      <p>Ó bien ingresa con...</p>
      <a id='btn-facebook' class='btn-social-net' type='submit' ><img class='btn-social-icon' src='../img/facebook.png' alt='facebook'></a>
      <a id='btn-google' class='btn-social-net' type='submit'><img class='btn-social-icon' src='../img/google.png' alt='gmail'></a>
      <p>¿No tienes una cuenta? <a href='#/register'>Regístrate</a></p>
    </section>`;

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

  return mainElem;
};
