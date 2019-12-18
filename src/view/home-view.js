export default () => {
  const homeView = `<p> Bienvenid@ </p>
  <a href ="#/"> Cerrar Sesión</a>`;
  const formElem = document.createElement('form');
  formElem.className = 'form-home';
  formElem.innerHTML = homeView;
  return formElem;
};
