export const addUserData = (userId, userObj) => {
  const result = firebase.firestore().collection('users').doc(userId).set(userObj);
  return result;
};

export const Data = idUser => firebase.firestore().collection('users').doc(idUser).get();

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
