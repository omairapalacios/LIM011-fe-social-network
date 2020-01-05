import { currentUser } from './auth-user.js';

export const addPost = (textPost) => {
  const result = firebase.firestore().collection('posts').add({
    post: textPost,
    idUser: currentUser().uid,
    name: currentUser().displayName,
    email: currentUser().email,
    date: new Date(),
    numlikes: 0,
  });
  return result;
};

export const getPost = () => {
  const result = firebase.firestore().collection('posts');
  return result;
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
