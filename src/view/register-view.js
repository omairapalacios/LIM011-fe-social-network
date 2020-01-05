import registerUserEmailEvent from '../controller/register-controller.js';

export default () => {
  const registerView = `
    <section class='section-banner'>
      <div class='container-banner'>
        <p> Sé parte de esta red, promociona y encuentra talento </p>
      </div>
    </section>
    <section class='section-main'>
      <div class='container-logo'>
        <img src='./img/logo.png' alt='logo' class='icon-logo-main'>
      </div>
      <p>Bienvenidx!</p>
      <form>
        <input id='username' type='text' placeholder='Nombre de usuario'>      
        <input id='email-register' type='email' placeholder='Correo Electronico'>
        <input id='password-register' type='password' placeholder='Contraseña'>
        <span class='errors' id='error-message'></span>
        <span class='errors' id='error-password'></span>
        <span class='errors' id='error-email'></span>
        <button id='btn-register' class='btn btn-general' type='submit'>REGISTRAME</button>
      </form>
    </section> `;

  const mainElem = document.createElement('main');
  mainElem.className = 'viewRegister';
  mainElem.innerHTML = registerView;
  const btnRegister = mainElem.querySelector('button');
  btnRegister.addEventListener('click', registerUserEmailEvent);
  return mainElem;
};
