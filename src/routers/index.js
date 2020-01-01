import { changeView } from './router.js';

export const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => (changeView(window.location.hash)));
};
// Haschange es un eveneto que indica cmabio
// el hash devuelve la parte de la url que sigo al simbolo #
