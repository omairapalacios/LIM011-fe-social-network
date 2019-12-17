export default () => {
  const headerView = `
  <div class="menu">
    <img src="" alt="" class="icon-menu">menu
  </div>
  <img src="./img/logo.png" alt="" class="logo">
  <div class="log-out">
    <img src="" alt="">
    <span>Cerrar Sesión</span>
  </div>`;
  const headerELem = document.createElement('header');
  headerELem.innerHTML = headerView;
  return headerELem;
};
