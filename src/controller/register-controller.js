import { registerUserEmail } from '../model/auth-users.js';

export default (event) => {
  event.preventDefault();
  const btnRegister = event.target;
  const username = btnRegister.closest('form').querySelector('input[type=text]');
  const email = btnRegister.closest('form').querySelector('input[type=email]');
  const password = btnRegister.closest('form').querySelector('input[type=password]');
  const message = btnRegister.closest('form').querySelector('label');

  registerUserEmail(email.value, password.value, username.value)
    .then((result) => {
      result.user.updateProfile({
        displayName: username,
      });
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
      email.value = '';
      password.value = '';
      username.value = '';
      if (errorPassword === 'auth/weak-password') {
        message.innerHTML = 'La contraseña ingresada es débil, ingrese 6 o más caracteres';
      } else if (errorEmail === 'auth/email-already-in-use') {
        message.innerHTML = 'El correo ingresado ya se encuentra registrado';
      } else if (errorEmail === 'auth/invalid-email') {
        message.innerHTML = 'El correo ingresado no es váĺido';
      }
    });
};
