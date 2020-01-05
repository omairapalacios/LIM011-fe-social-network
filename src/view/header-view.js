import { signOutSesion } from '../controller/login-controller.js';

export default () => {
  const headerView = `
  <div class='menu'>
    <i class="icon-menu  fas fa-bars"></i>
  </div>  
  <div class= 'muro'> 
    <a href='#/home'> MURO</a>
  </div>
  <div class='header-logo'>
    <img src='' alt='' class='icon-logo'>
  </div>
  <div class='profile-header'>
    <a href='#/profile'> PERFIL</a>
  </div>
  <div class='log-out'>
    <i id='log-out' class="icon-log-out fas fa-sign-out-alt"></i>
  </div>`;
  const headerELem = document.createElement('header');
  headerELem.innerHTML = headerView;

  // btnSignOut.addEventListener('click');
  const btnLogout = headerELem.querySelector('#log-out');
  btnLogout.addEventListener('click', signOutSesion);

  return headerELem;
};
