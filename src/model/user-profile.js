import { currentUser } from './auth-user.js';

export const profile = (typeUser) => {
  const result = firebase.firestore().collection('profile').add({
    tipo: typeUser,
    idUser: currentUser().uid,
    name: currentUser().displayName,
    email: currentUser().email,
    date: new Date(),
  });
  return result;
};
