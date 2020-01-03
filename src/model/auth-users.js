export const signInUserEmail = (email, password) => {
  console.log(typeof (email, password));
  const result = firebase.auth().signInWithEmailAndPassword(email, password);
  console.log(result);
  console.log(typeof (result));
  return result;
};

export const signInUserGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = firebase.auth().signInWithPopup(provider);
  console.log(result);

  // result.then((resp )=> {
  // console.log(resp.user);
  // });
  console.log(typeof (result));
  return result;
};

export const signInUserFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  const result = firebase.auth().signInWithPopup(provider);
  console.log(result);
  console.log(typeof (result));
  return result;
};

export const registerUserEmail = (email, password) => {
  const result = firebase.auth().createUserWithEmailAndPassword(email, password);
  console.log(result);
  console.log(typeof (result));
  return result;
};
