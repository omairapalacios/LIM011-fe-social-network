export const signInUserEmail = (email, password) => (
  firebase.auth().signInWithEmailAndPassword(email, password));

export const signInUserGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
export const signInUserFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
export const registerUserEmail = (email, password) => (
  firebase.auth().createUserWithEmailAndPassword(email, password));

export const signOut = () => firebase.auth().signOut();

export const addUserData = (userId, userObj) => {
  const result = firebase.firestore().collection('users').doc(userId).set(userObj);
  return result;
};

export const currentUser = () => firebase.auth().currentUser;

export const getUserData = idUser => firebase.firestore().collection('users').doc(idUser).get();

export const updateProfile = (idProfile, newTextProfileType, newTextProfileName, newaboutme,
  newcountry) => {
  const result = firebase.firestore().collection('users').doc(idProfile).update({
    displayName: newTextProfileName,
    type: newTextProfileType,
    aboutme: newaboutme,
    country: newcountry,
  });
  return result;
};
