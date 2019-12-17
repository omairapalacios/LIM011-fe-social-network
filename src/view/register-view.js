
export default () => {
  const registerView = `
  <form class="form-register" action="">
    <h3>Bienvenidx</h3>
    <div class="input-container">
      <input id="username" type="text" placeholder="Nombre de usuario">
      <input id="email-register" type="email" placeholder="Correo Electronico">
      <input id="password-register" type="password" placeholder="Contraseña">
    </div>
    <button id="btn-register" class="btn-general" type="submit">REGISTRARME</button>
  </form>`;
  const divElem = document.createElement('div');
  divElem.className = 'viewRegister';
  divElem.innerHTML = registerView;
  return divElem;
};
