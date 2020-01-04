import { signOutSesion } from '../controller/login-controller.js';

export default () => {
  const headerView = `
  <div class='menu'>
  <i class="icon-menu  fas fa-bars "></i>
  </div>
  <div class= 'menu'> 
  <a href='#/home'> menu</a>
  </div>
  <div class='menu'>
  <a href='#/profile'> profile</a>
  </div>
  <div class='log-out'>
    <i id='log-out'><i class="fas fa-sign-out-alt"></i></a>
  </div>`;
  const headerELem = document.createElement('header');
  headerELem.innerHTML = headerView;

  // btnSignOut.addEventListener('click');
  const btnLogout = headerELem.querySelector('#log-out');
  btnLogout.addEventListener('click', signOutSesion);

  return headerELem;
};
