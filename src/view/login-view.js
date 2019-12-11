export default () => {
  const viewLogin = `
<p>Bienvenidx</p>
<form action="">
  <input type="email" placeholder="Correo Electronico" required>
  <input type="password" placeholder="Contraseña" required>
</form>
<div id="container"></div>
<ul>
    <li>Fb</li>
    <li>Gmail</li>
  </ul>
<div>
  <p>¿No tienes una cuenta?<a href="#/register">Regístrate</a></p>
</div>`;
  const divELem = document.createElement('div');
  divELem.innerHTML = viewLogin;
  return divELem;
};
