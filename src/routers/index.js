import { changeView } from './router.js';

export const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => (changeView(window.location.hash)));
};
