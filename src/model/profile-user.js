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
export const getProfile = () => {
  const result = firebase.firestore().collection('profile');
  return result;
};

export const updateProfile = (idProfile, newTextProfileType, newTextProfileName) => {
  const result = firebase.firestore().collection('posts').doc(idProfile).update({
    name: newTextProfileName,
    ocupacion: newTextProfileType,
  });
  return result;
};
