import { components } from '../utils/util-view.js';
// el parametro hasta el contenido de la URL
export const changeView = (hash) => {
  // nos trae el window.location.hash del main para agruparla con cada una de las vistas
  const container = document.querySelector('#container');
  container.innerHTML = '';
  // RECUERDA QUE EL SWITCH evalua una expresion en este caso el HASH
  switch (hash) {
    case '':
    case '#/':
    case '#/login':
      container.appendChild(components.login());
      break;
    case '#/register':
      container.appendChild(components.register());
      break;
    case '#home':
      container.appendChild(components.home());
      break;
    default:
      container.appendChild(components.login());
  }
};
