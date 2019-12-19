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
      <label id="error-email" for=""></label>
      <input id="password-register" type="password" placeholder="Contraseña">
      <label id="error-password" for=""></label>
      <button id="btn-register" class="btn-general" type="submit">REGISTRAME</button>
      </form>`;

  const mainElem = document.createElement('main');
  mainElem.className = 'viewRegister';
  mainElem.innerHTML = registerView;
  // MANEJO DE DOM (eventos)
  const btnRegister = mainElem.querySelector('button');
  // eslint-disable-next-line no-undef
  btnRegister.addEventListener('click', registerUserEmailEvent);
  return mainElem;
};
