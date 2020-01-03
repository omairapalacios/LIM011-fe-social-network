import { signOutSesion } from '../controller/login-controller.js';

export default () => {
  const headerView = `
  <div class='menu'>
  <i class="icon-menu  fas fa-bars "></i>menu
  </div>
  <div class='log-out'>
    <img src='' alt=''>
    <a id='log-out'><i class="fas fa-sign-out-alt"></i></a>
  </div>`;
  const headerELem = document.createElement('header');
  headerELem.innerHTML = headerView;

  // btnSignOut.addEventListener('click');
  const btnLogout = headerELem.querySelector('#log-out');
  btnLogout.addEventListener('click', signOutSesion);

  return headerELem;
};
