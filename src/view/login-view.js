export default () => {
  const loginView = `
  <form class="form-login" action="">
    <h3>Bienvenidx</h3>
    <div class="input-container">
      <input type="email" id="email-login" placeholder="Correo Electronico" required>
      <input type="password" id="password-login" placeholder="Contraseña" required>
    </div>
    <button id="btn-login" class="btn-general" type="submit">INGRESAR</button>
    <p>ó bien ingresa con...</p>
    <div class="btn-social-net">
      <button id="btn-facebook" class="btn-social-icon" type="submit" ><img src="../img/facebook.png" alt="facebook"></button>
      <button id="btn-google" class="btn-social-icon" type="submit"><img src="../img/google.png" alt="gmail"></button>
    </div>
    <p>¿No tienes una cuenta? <a href="#/register">Regístrate</a></p>
    </form>`;
  const divELem = document.createElement('div');
  divELem.innerHTML = loginView;
  return divELem;
};
