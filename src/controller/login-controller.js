import {
  signInUserEmail, signInUserGoogle, signInUserFacebook, signOut,
} from '../model/auth-users.js';

export const signInEmailEvent = (event) => {
  event.preventDefault();
  const btnLogin = event.target;
  const email = btnLogin.closest('form').querySelector('input[type=email]');
  const password = btnLogin.closest('form').querySelector('input[type=password]');
  signInUserEmail(email.value, password.value)
    .then((result) => {
      if (result.user.emailVerified) {
        window.location.hash = '#/home';
      } else {
        signOut();
        console.log('Por favor realiza la verificación en tu correo');
      }
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};

export const signInGoogleEvent = (event) => {
  event.preventDefault();
  signInUserGoogle()
    .then((result) => {
      window.location.hash = '#/home';
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(token, user);
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log(email, credential);
    });
};

export const signInFacebookEvent = (event) => {
  event.preventDefault();
  signInUserFacebook()
    .then((result) => {
      window.location.hash = '#/home';
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(token, user);
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // The email of the user's account used.
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
