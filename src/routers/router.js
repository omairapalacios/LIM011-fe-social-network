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
      container.appendChild(components.header());
      container.appendChild(components.home());
      break;
    case '#/profile':
      container.appendChild(components.header());
      container.appendChild(components.profile());
      break;

    default:
      container.appendChild(components.login());
  }
};
