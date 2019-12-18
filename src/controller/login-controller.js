import {
  signInUserEmail, signInUserFacebook, signInUserGoogle, signOut, accesUser,
} from '../model/auth-user.js';

export const signInEmailEvent = (event) => {
// el metodo preventDefault() cancela el evento si es cancelable,
// lo que significa que la accion predeterminada que
// pertenece al evento no ocurrirá
  event.preventDefault();
  // implemetada para darle una delegación al evento
  const btnLogin = event.target;
  // const email = document.querySelector('#email-login');
  // const password = document.querySelector('#password-login');
  const email = btnLogin.closest('form').querySelector('input[type=email]');
  const password = btnLogin.closest('form').querySelector('input[type=password]');
  signInUserEmail(email.value, password.value)
    .then((result) => {
      if (result.user.emailVerified) {
        window.location.hash = '#/home';
      } else {
        signOut();
        console.log('Realice la verificación de registro en su correo electrónico porfavor');
      }
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
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

export const signGoobleEvent = (event) => {
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
export const accesEvent = () => {
  const nameuser = document.querySelector('#user');
  accesUser(nameuser.value)
    .then((user) => {
      if (user) {
        const emails = user.email;
        console.log('usuario', emails);
      } else {
        console.log('error');
      }
    });
};
