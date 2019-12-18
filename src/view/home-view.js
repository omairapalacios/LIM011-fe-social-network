import { signOutSesion} from '../controller/login-controller.js'

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
<a id="btn-user">usuario</a>
<a id="usuario">mostrar usuario aqui</a>`;
  formElem.innerHTML = homeView;
  // MANEJO DE DOM (eventos)

  // btnSignOut.addEventListener('click');
  const btnuser = formElem.querySelector('#btn-user');
  btnuser.addEventListener('click', signOutSesion);
  return formElem;
};
