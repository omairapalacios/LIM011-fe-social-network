import { currentUser } from './auth-user.js';

export const addPost = (textPost, typePost) => {
  const result = firebase.firestore().collection('posts').add({
    post: textPost,
    idUser: currentUser().uid,
    name: currentUser().displayName,
    email: currentUser().email,
    date: new Date(),
    numlikes: 0,
    type: typePost,
  });
  return result;
};

export const getPost = (funcionparasacararray) => {
  firebase.firestore().collection('posts').orderBy('date', 'desc')
    .onSnapshot((querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        arr.push(obj);
      });
      funcionparasacararray(arr);
    });
};

export const updatePost = (idPost, newTextPost) => {
  const result = firebase.firestore().collection('posts').doc(idPost).update({
    post: newTextPost,
  });
  return result;
};

export const deletePost = (idPost) => {
  const result = firebase.firestore().collection('posts').doc(idPost).delete();
  return result;
};

export const countLikes = (idPost) => {
  const incrementLikes = firebase.firestore.FieldValue.increment(1);
  const result = firebase.firestore().collection('posts').doc(idPost).update({
    numlikes: incrementLikes,
  });
  return result;
};

export const updateTypePost = (idPost, typePost) => {
  const result = firebase.firestore().collection('posts').doc(idPost).update({
    type: typePost,
  });
  return result;
};

export const addComment = (objComment) => {
  const result = firebase.firestore().collection('comments').add(objComment);
  return result;
};

export const getComments = (idPost) => {
  const result = firebase.firestore().collection('comments').where('idPostComment', '==', idPost);
  return result;
};
