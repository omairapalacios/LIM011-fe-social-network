/* eslint-disable max-len */
export default () => {
  // REQUIRED: es un atributo booleano-- especifica que el elmento debe completarse antes de enviar el formulario
  // TIPO SUBMIT: SIRVE PARA ENVIAR EL FORMULARIO una vez se ha rellenado todos los campos, recuerda que por defecto
  // el boton sera ENVIAR equivale al idioma que tienes, podemos modificar el texto mediante el atributo VALUE
  const loginView = `
    <p> BIENVENID@S </p>
    <p> Si ya tienes una cuenta </p>

    <input type="email" id= "email-login"  placeholder ="Correo Electrónico" required>
    <input type = "password" id ="email-login" placeholder ="Contraseña" required>
    <button id="btn-login" class= "btn-general type ="submit"> INGRESAR</button>
    <p> Ingresa con : </p>
    <button id="btn-facebook" class="btn-social-icon" type ="submit" > </button>
    <button id="btn-google"  class="btn-social-icon" type ="submit"> </button>
    <p>¿No tienes una cuenta?<a href="#/register">Registrate </a></p>
    `;
  const divForm = document.createElement('div');
  divForm.className = 'form-login';
  divForm.innerHTML = loginView;
  return divForm;
};
