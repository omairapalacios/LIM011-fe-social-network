import { signOutSesion, accesEvent } from '../controller/login-controller.js';

export default () => {
  const formElem = document.createElement('form');
  formElem.className = 'form-home';
  const homeView = `<nav>
  <ul>
  <li><a id="btn-profile">Profile</a></li>
  <li><a id="btn-home">Home</a></li>
  <li><a id="btn-close">Sign out</a></li>
  </ul>
</nav>
<div class="container-user">
<img class="color-img" src="../img/">
<div class="email-user">
  <img class="img-perfil" src=''/>
  <p class="select"> </p>
</div>
<a id="btn-user">usuario</a>
<a id="user> el usuario esta aqui </a>
`;
  formElem.innerHTML = homeView;
  const btnuser = formElem.querySelector('#btn-close');
  btnuser.addEventListener('click', signOutSesion);
  const btnAcces = formElem.querySelector('#btn-user');
  btnAcces.addEventListener('click', accesEvent);
  return formElem;
};
