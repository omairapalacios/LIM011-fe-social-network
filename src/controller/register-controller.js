import { registerUserEmail } from '../model/auth-users.js';

export default (event) => {
  event.preventDefault();
  const btnRegister = event.target;
  const email = btnRegister.closest('form').querySelector('input[type=email]');
  const password = btnRegister.closest('form').querySelector('input[type=password]');
  const message = btnRegister.closest('form').querySelector('label');

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
      const errorPassword = error.code;
      const errorEmail = error.message;

      if (errorPassword === 'auth/weak-password') {
        message.innerHTML = 'La contraseña ingresada es débil, ingrese 6 o más caracteres';
        password.value = '';
      } else if (errorEmail === 'auth/email-already-in-use') {
        email.value = '';
        message.innerHTML = 'El correo ingresado ya se encuentra registrado';
      } else if (errorEmail === 'auth/invalid-email') {
        email.value = '';
        message.innerHTML = 'El correo ingresado no es váĺido';
      }
    });
};
