import { components } from '../utils/util-view.js';

export const changeView = (hash) => {
  const container = document.querySelector('#container');
  container.innerHTML = '';
  switch (hash) {
    case '':
    case '#/':
    case '#/login':
      container.appendChild(components.login());
      break;
    case '#/register':
      container.appendChild(components.register());
      break;
    case '#/home':
      container.appendChild(components.home());
      break;
    default:
      container.appendChild(components.login());
  }
};
