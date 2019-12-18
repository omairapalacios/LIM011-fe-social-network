import { signOutSesion } from '../controller/login-controller.js';

export default () => {
  const homeView = `
  <p>Bienvenidx</p>
  <button id="btn-signout" type="submit"> CERRAR SESIÓN</button>`;
  const divELem = document.createElement('div');
  divELem.innerHTML = homeView;

  const btnSignOut = divELem.querySelector('#btn-signout');
  btnSignOut.addEventListener('click', signOutSesion);

  return divELem;
};
