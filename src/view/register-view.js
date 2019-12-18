
import registerUserEmailEvent from '../controller/register-controller.js';

export default () => {
  const registerView = `
  <form class="form-register" action="">
    <h3>Bienvenidx</h3>
    <div class="input-container">
      <input type="text" placeholder="Nombre de usuario">
      <input type="email" placeholder="Correo Electronico">
      <label for=""></label>
      <input type="password" placeholder="Contraseña">
    </div>
    <button class="btn-general" type="submit">REGISTRARME</button>
  </form>`;
  const divElem = document.createElement('div');
  divElem.className = 'viewRegister';
  divElem.innerHTML = registerView;

  const btnRegister = divElem.querySelector('button');
  btnRegister.addEventListener('click', registerUserEmailEvent);
  return divElem;
};
