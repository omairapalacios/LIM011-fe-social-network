import { signInEmailEvent, signGoogleEvent, signFacebookEvent } from '../controller/login-controller.js';

/* eslint-disable max-len */
export default () => {
  const divForm = document.createElement('form');
  divForm.className = 'form-login';
  const loginView = `
    <p> BIENVENID@S </p>
    <p> Si ya tienes una cuenta </p>
    <input type="email" id= "email-login"  placeholder ="Correo Electrónico" required>
    <input type = "password" id ="password-login" placeholder ="Contraseña" required>
    <button id="btn-login" class= "btn-general type ="submit"> INGRESAR</button>
    <p> Ingresa con : </p>
    <button id="btn-facebook" class="btn-social-icon" type ="submit" > <img src="../img/facebook.png" alt="facebook"></button>
    <button id="btn-google"  class="btn-social-icon" type ="submit"><img src="../img/google.png"> </button>
    <p>¿No tienes una cuenta?<a href="#/register">Registrate </a></p>
    `;
  divForm.innerHTML = loginView;
  const btnLogin = divForm.querySelector('#btn-login');
  btnLogin.addEventListener('click', signInEmailEvent);
  const btnFacebook = divForm.querySelector('#btn-facebook');
  btnFacebook.addEventListener('click', signFacebookEvent);
  const btnGoogle = divForm.querySelector('#btn-google');
  btnGoogle.addEventListener('click', signGoogleEvent);

  return divForm;
};
