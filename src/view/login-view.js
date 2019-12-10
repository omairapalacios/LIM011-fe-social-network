export default () => {
  const viewLogin = `
<form action="">
  <input type="email" placeholder="Correo Electronico" required>
  <input type="password" placeholder="Contraseña" required>
</form>`;

  const divELem = document.createElement('div');
  divELem.innerHTML = viewLogin;
  return divELem;
};
