export default () => {
  const loginView = `
<p>Bienvenidx</p>
  <form action="">
    <p>Si ya tienes una cuenta</p>
    <input type="email" id="email-login" placeholder="Correo Electronico" required>
    <input type="password" id="password-login" placeholder="Contraseña" required>
    <button id="btn-login" class="btn-general" type="submit">INGRESAR</button>
  </form>
  <p>ó ingresa con :</p>
  <button id="btn-fb" class="icon-social-net" type="submit" ><img src="../img/facebook.png" alt="facebook"></button>
  <button id="btn-google" class="icon-social-net" type="submit"><img src="../img/google.png" alt="gmail"></button>
  <p>¿No tienes una cuenta?<a href="#/register">Regístrate</a></p>`;
  const divELem = document.createElement('div');
  divELem.innerHTML = loginView;
  return divELem;
};
