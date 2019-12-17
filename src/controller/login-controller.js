import { signInUserEmail, signInUserGoogle, signInUserFacebook } from '../model/auth-users.js';

export const signInEmailEvent = () => {
  const btnLogin = document.querySelector('#btn-login');
  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-login');
    const password = document.querySelector('#password-login');

    signInUserEmail(email.value, password.value)
      .then((result) => {
        if (result.user.emailVerified) {
          window.location.hash = '#/home';
        } else {
          firebase.auth.signOut();
          console.log('Por favor realiza la verificación en tu correo');
        }
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  });


  const btnGoogle = document.querySelector('#btn-google');
  btnGoogle.addEventListener('click', () => {
    signInUserGoogle()
      .then((result) => {
        window.location.hash = '#/home';
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(token, user);
        // ...
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
  });

  const btnFacebook = document.querySelector('#btn-facebook');
  btnFacebook.addEventListener('click', () => {
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
  });
};
