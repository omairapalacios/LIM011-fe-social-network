import {
  signInEmailEvent, signGoogleEvent, signFacebookEvent, passwordShow,
} from '../controller/login-controller.js';

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
    <form action=''>
      <input type='email' id='email-login' placeholder='Email' required>
      
      <div class='pass-eye' > 
      <input type='password' id='password-login' placeholder='Password' required>
      <span id="btn-eye" class="eye-class"><img src="https://img.icons8.com/material-rounded/24/000000/visible.png"></span>
      <div/>
      <button id='btn-login' class='btn-general' type='submit'>INGRESAR</button>
      <span class='errors' id='error-email'></span>
      <span class='errors' id='error-message'></span>
      <span class='errors' id='error-password'></span>
      <span class='errors' id='error-email'></span>
    </form>
      <p>Ó bien ingresa con...</p>
      <a id='btn-facebook' class='btn-social-net' type='submit' ><img class='btn-social-icon' src='../img/facebook.png' alt='facebook'></a>
      <a id='btn-google' class='btn-social-net' type='submit'><img class='btn-social-icon' src='../img/google.png' alt='gmail'></a>
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
  const showPass = mainElem.querySelector('#btn-eye');
  showPass.addEventListener('click', passwordShow);

  return mainElem;
};
