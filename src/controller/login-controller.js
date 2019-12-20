import {
  signInUserEmail, signInUserFacebook, signInUserGoogle, signOut,
} from '../model/auth-user.js';

export const signInEmailEvent = (event) => {
  event.preventDefault();
  const btnLogin = event.target;
  const email = btnLogin.closest('form').querySelector('input[type=email]');
  const password = btnLogin.closest('form').querySelector('input[type=password]');
  const msgError = btnLogin.closest('form').querySelector('#error-message');
  const msgErrorEmail = btnLogin.closest('form').querySelector('#error-email');
  const msgErrorPassword = btnLogin.closest('form').querySelector('#error-password');
  if (email.value !== '' && password.value !== '') {
    signInUserEmail(email.value, password.value)
      .then((result) => {
        if (result.user.emailVerified) {
          window.location.hash = '#/home';
        } else {
          console.log('Realice la verificación de registro en su correo electrónico porfavor');
        }
      }).catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        if (errorCode === 'auth/invalid-email') {
          email.className = 'error-color';
          msgError.innerHTML = 'El formato del correo electronico ingresado no es valido(*)';
        } else if (errorCode === 'auth/wrong-password') {
          password.className = 'error-color';
          msgError.innerHTML = 'La contraseña ingresada es incorrecta(*)';
        } else if (errorCode === 'auth/user-not-found') {
          email.className = 'error-color';
          msgError.innerHTML = 'El correo no se encuentra registrado(*)';
        }
      });
  } else {
    email.className = 'error-color';
    password.className = 'error-color';
    msgErrorEmail.innerHTML = 'Por favor ingrese un correo electrónico(*)';
    msgErrorPassword.innerHTML = 'Por favor ingrese una contraseña(*)';
  }
};

export const signFacebookEvent = (event) => {
  event.preventDefault();
  signInUserFacebook()
    .then((result) => {
      window.location.hash = '#/home';
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(token, user);
    }).catch((error) => {
      const errorCode = error.code;
      const erroMessage = error.message;
      console.log(errorCode, erroMessage);
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log(email, credential);
    });
};

export const signGoogleEvent = (event) => {
  event.preventDefault();
  signInUserGoogle()
    .then((result) => {
      window.location.hash = '#/home';
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(token, user);
    }).catch((error) => {
      const errorCode = error.code;
      const erroMessage = error.message;
      console.log(errorCode, erroMessage);
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log(email, credential);
    });
};

export const signOutSesion = (event) => {
  event.preventDefault();
  signOut()
    .then(() => {
      window.location.hash = '#/login';
    }).catch((error) => {
      const errorCode = error.code;
      console.log(errorCode);
    });
};
