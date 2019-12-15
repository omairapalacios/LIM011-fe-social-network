export default () => {
  const homeView = `
  <p>Bienvenidx</p>
    <button id="btn-signout" class="btn-general" type="button">SALIR</button>`;
  const divELem = document.createElement('div');
  divELem.innerHTML = homeView;
  return divELem;
};
