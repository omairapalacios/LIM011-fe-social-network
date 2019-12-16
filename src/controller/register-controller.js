import { registerUserEmail } from '../model/auth-users.js';

export default () => {
  const btnRegister = document.getElementById('btn-register');
  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-register');
    const password = document.querySelector('#password-register');
    const username = document.querySelector('#username');

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
        alert('Para continuar por favor revisa tu correo el electronico y valida');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    email.value = '';
    password.value = '';
    username.value = '';
  });
};
