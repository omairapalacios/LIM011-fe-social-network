import { signOutSesion } from '../controller/login-controller.js';

export default () => {
  const headerView = `

  <button id="menu"><i class="icon-menu  fas fa-bars"></i></button>
  <nav id="superior">
   <ul>
    <li class='menu'><a class="nav-container-link" href='#/home'> MURO</a></li>
    <li class='profile-heade'><a  class="nav-container-link" href='#/profile'> PERFIL</a></li>
    <li class='log-out' ><a class="nav-container-link" href="#"> <i id='log-out' class="icon-log-out fas fa-sign-out-alt"></i></a></li>
 
 </ul>
 </nav>
  
 
`;

  const headerELem = document.createElement('header');
  headerELem.innerHTML = headerView;

  // btnSignOut.addEventListener('click');
  const btnLogout = headerELem.querySelector('#log-out');
  btnLogout.addEventListener('click', signOutSesion);

  return headerELem;
};
