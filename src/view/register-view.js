
export default () => {
  const registerView = `
    <section class="section-logo">
      <img src="./img/logo.png" alt="logo">
    </section>
    <p>Bienvenidx</p>
      <input id="username" type="text" placeholder="Nombre de usuario">
      <input id="email-register" type="email" placeholder="Correo Electronico">
      <input id="password-register" type="password" placeholder="Contraseña">
      <button id="btn-register" class="btn-general" type="submit">REGISTRAME</button>`;

  const mainElem = document.createElement('main');
  mainElem.className = 'viewRegister';
  mainElem.innerHTML = registerView;
  return mainElem;
};
