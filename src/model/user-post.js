import { currentUser } from './auth-user.js';

export const addPost = (textPost) => {
  const result = firebase.firestore().collection('posts').add({
    post: textPost,
    idUser: currentUser().uid,
    name: currentUser().displayName,
    email: currentUser().email,
    date: new Date(),
  });
  return result;
};

export const getPost = () => {
  const result = firebase.firestore().collection('posts').get();
  return result;
};

export const updatePost = (idPost, textPost) => {
  const result = firebase.firestore().collection('posts').doc(idPost).update({
    post: textPost,
  });
  return result;
};
