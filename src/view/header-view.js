
import { signOutSesion } from '../controller/login-controller.js';

export default () => {
  const headerView = `
  <img src='./img/logo.png' alt='' class='logo'>
  <div class='menu'>
  <a href='#/home'>HOME</a>
  </div>
  <div class='menu'>
  <a href='#/profile'>Profile</a>
  </div>
  <div class='menu'>
  <a id='log-out'> Cerrar Sesión </a>
  </div>
  `;

  const headerELem = document.createElement('header');
  headerELem.innerHTML = headerView;

  // btnSignOut.addEventListener('click');
  const btnLogout = headerELem.querySelector('#log-out');
  btnLogout.addEventListener('click', signOutSesion);

  return headerELem;
};
