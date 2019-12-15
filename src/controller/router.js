import { components } from '../view/index.js';
import registerController from './register-controller.js';
import { signInEmailEvent } from './login-controller.js';

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
    default:
      break;
  }
};
