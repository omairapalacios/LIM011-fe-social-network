import { signOutSesion } from '../controller/login-controller.js';

export default () => {
  const headerView = `
  <div class='menu'>
    <img src='' alt='' class='icon-menu'>menu
  </div>
  <img src='./img/logo.png' alt='' class='logo'>
  <div class='log-out'>
    <img src='' alt=''>
    <a id='log-out'>Cerrar Sesión</a>
  </div>`;
  const headerELem = document.createElement('header');
  headerELem.innerHTML = headerView;

  // btnSignOut.addEventListener('click');
  const btnLogout = headerELem.querySelector('#log-out');
  btnLogout.addEventListener('click', signOutSesion);

  return headerELem;
};
