export const registerUserEmail = (email, password, username) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
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
};
