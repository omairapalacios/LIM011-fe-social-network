import { registerUserEmail} from '../model/auth-user.js';

export default (event) => {
  event.preventDefault();
  //const btnRegister = event.target;
  const email = document.querySelector('#email-register');
  const password = document.querySelector('#password-register');
  // const username = document.querySelector('#username');

  registerUserEmail(email.value, password.value)
    .then((result) => {
      const redirectLogin = {
        url: 'http://localhost:5000/',
      };
      result.user.sendEmailVerification(redirectLogin).catch((error) => {
        console.error(error);
      });

      firebase.auth().signOut();
      console.log('Para continuar por favor revisa tu correo el electronico y valida');
    })
    .catch((error) => {
      // const msgErrorPassword = document.querySelector('#error-password');
      const msgErrorEmail = document.querySelector('#error-password');

      const errorPassword = error.code;
      // const errorEmail = error.message;

      if (errorPassword === 'auth/weak-password') {
        msgErrorEmail.innerHTML = 'Contraseña débil';
      }
    });
};
