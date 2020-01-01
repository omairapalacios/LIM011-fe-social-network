import registerUserEmailEvent from '../controller/register-controller.js';

export default () => {
  const registerView = `
    <section class="section-logo">
      <img src="./img/logo.png" alt="logo">
    </section>
    <p>Bienvenidx</p>
    <form>
      <input id="username" type="text" placeholder="Nombre de usuario">      
      <input id="email-register" type="email" placeholder="Correo Electronico">
      <input id="password-register" type="password" placeholder="Contraseña">
      <span class='errors' id='error-message'></span>
      <span class='errors' id='error-password'></span>
      <span class='errors' id='error-email'></span>
      <button id="btn-register" class="btn-general" type="submit">REGISTRAME</button>
      </form>`;

  const mainElem = document.createElement('main');
  mainElem.className = 'viewRegister';
  mainElem.innerHTML = registerView;
  const btnRegister = mainElem.querySelector('button');
  btnRegister.addEventListener('click', registerUserEmailEvent);
  return mainElem;
};