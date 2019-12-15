export default () => {
  const homeView = `
  <p>Bienvenidx</p>
  <a href="#/">Cerrar Sesión</a>`;
  const divELem = document.createElement('div');
  divELem.innerHTML = homeView;
  return divELem;
};
