import { signInEmailEvent, signGoogleEvent, signFacebookEvent } from '../controller/login-controller.js';

/* eslint-disable max-len */
export default () => {
  // REQUIRED: es un atributo booleano-- especifica que el elmento debe completarse antes de enviar el formulario
  // TIPO SUBMIT: SIRVE PARA ENVIAR EL FORMULARIO una vez se ha rellenado todos los campos, recuerda que por defecto
  // el boton sera ENVIAR equivale al idioma que tienes, podemos modificar el texto mediante el atributo VALUE
  const loginView = `
    <section class="section-logo">
      <img src="./img/logo.png" alt="logo">
    </section>
    <p>¡Bienvenidx!</p>
    <form action="">
      <input type="email" id="email-login" placeholder="Email" required>
      <input type="password" id="password-login" placeholder="Password" required>
      <button id="btn-login" class="btn-general" type="submit">Log in</button>
    </form>
      <p>O bien ingresa con...</p>
      <a id="btn-facebook" class="btn-social-icon" type="submit" ><img src="../img/facebook.png" alt="facebook"></a>
      <a id="btn-google" class="btn-social-icon" type="submit"><img src="../img/google.png" alt="gmail"></a>
      <p>¿No tienes una cuenta? <a href="#/register">Regístrate.</a></p>`;

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
