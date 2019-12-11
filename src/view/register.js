export const register = () => {
    const divElement = document.createElement('div');

    const template = ` <p>DATOS DE REGISTRO</p>
    <label for="text-name">Nombres:</label>
    <input type="text" id="text-name">
    <label for="text-last-name">Apellidos:</label>
    <input type="text" id="text-last-name">
    <label for="text-email">Correo:</label>
    <input type="text" id="text-email">
    <label for="text-password">Password:</label>
    <input type="text" id="text-password">
    <label for="pais">País:</label>
    <select name="" id="pais">
      <option value="0">Elegir pais...</option>
      <option value="pe">Peru</option>
      <option value="col">Colombia</option>
    </select>
    <label for="">Fecha de Nacimiento:</label>
    <input type="date" name="" id="date-user">
    <button id="btn-register">REGISTRARME</button>`;
  divElement.innerHTML = template;

  document.getElementById('btn-register').addEventListener('click', () => {
      console.log('click');
      const userName = document.getElementById('text-name');
      const lastName = document.getElementById('text-last-name');
      const userEmail = document.getElementById('text-email');
      const userPassword = document.getElementById('text-password');
      const country = document.getElementById('pais');
      const dateUser = document.getElementById('date-user');
      register(userName.value, lastName.value, userEmail.value, userPassword.value, country.value, dateUser.value);
  })

  return divElement;
}