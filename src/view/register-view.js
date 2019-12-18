export default () => {
  const registerView = ` 
    <p> Bienvenid@</p>
    <input id = "username" type = "text" placeholder ="Nombre de usuario">
    <input id = "email-register" type = "text" placeholder = "Correo Electrónico">
    <button id = "btn-register" class = "btn-general" type = "submit"> REGISTRO </button>
     `;
  const formElement = document.createElement('form');
  formElement.className = 'form-register';
  formElement.innerHTML = registerView;
  return formElement;
};
