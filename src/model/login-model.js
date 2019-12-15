export const signInUserEmail = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      if (result.user.emailVerified) {
        console.log(firebase.auth().currentUser.uid);
        const message = `Bienvenido ${result.user.displayname}`;
        console.log(message);
        window.location.hash = '#/home';
      } else {
        console.log('Por favor realiza la verificación en tu correo');
      }
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
};
