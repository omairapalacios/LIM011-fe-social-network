export default () => {
  const registerView = `
    <form action="">
      <input id="email" type="email" placeholder="Correo Electronico">
      <input id="password" type="password" placeholder="Contraseña">
      <button id="btn-register"type="submit">REGISTRAME</button>
    </form>
    `;
  const divElem = document.createElement('div');
  divElem.innerHTML = registerView;
  return divElem;
};
