import { components } from '../utils/utils-view.js';
import registerController from '../controller/register-controller.js';
import { signInEmailEvent } from '../controller/login-controller.js';

export const changeView = (hash) => {
  const container = document.querySelector('#container');
  container.innerHTML = '';
  switch (hash) {
    case '':
    case '#/':
    case '#/login':
      container.appendChild(components.login());
      signInEmailEvent();
      break;
    case '#/register':
      container.appendChild(components.register());
      registerController();
      break;
    case '#/home':
      container.appendChild(components.home());
      break;
    case '#/signOut':
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('sesion cerrada');
        }).catch((error) => {
          console.log(error);
        });
      break;
    default:
      container.appendChild(components.login());
      break;
  }
};
