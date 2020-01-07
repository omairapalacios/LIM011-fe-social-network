import { currentUser } from './auth-user.js';

export const addProfile = (textProfiler) => {
  const result = firebase.firestore().collection('profile').add({
    photo: currentUser().photoURL,
    idUser: currentUser().uid,
    name: currentUser().displayName,
    email: currentUser().email,
    ocupacion: textProfiler,
  });
  console.log(textProfiler);
  return result;
};
