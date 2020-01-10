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

export const getPosts = (callback) => {
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
      callback(arr);
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

export const getComments = (idPost, callbackComment) => {
  firebase.firestore().collection('comments').where('idPostComment', '==', idPost)
    .onSnapshot((querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        arr.push(obj);
      });
      callbackComment(arr);
    });
};

export const getAllComments = () => {
  const result = firebase.firestore().collection('comments').get();
  return result;
};

export const deleteComment = (idComment) => {
  const result = firebase.firestore().collection('comments').doc(idComment).delete();
  return result;
};

export const updateComment = (idComment, newTextComent) => {
  const result = firebase.firestore().collection('comments').doc(idComment).update({
    textComment: newTextComent,
  });
  return result;
};

export const addLikes = (idPost, idUser, displayName) => {
  const likeRef = firebase.firestore().collection('likes').doc();
  const likesNum = firebase.firestore().collection('posts').doc(idPost);
  const increment = firebase.firestore.FieldValue.increment(1);
  const batch = firebase.firestore().batch();
  batch.set(likeRef, { idPostLike: idPost, idUserLike: idUser, nameUser: displayName });
  batch.set(likesNum, { numlikes: increment }, { merge: true });
  batch.commit();
};

export const deleteLikes = (idLike, idPost) => {
  const likeRef = firebase.firestore().collection('likes').doc(idLike);
  const likesNum = firebase.firestore().collection('posts').doc(idPost);
  const decrement = firebase.firestore.FieldValue.increment(-1);
  const batch = firebase.firestore().batch();
  batch.delete(likeRef);
  batch.set(likesNum, { numlikes: decrement }, { merge: true });
  batch.commit();
};

export const getUserLike = (idPost, idUser) => {
  const result = firebase.firestore().collection('likes')
    .where('idUserLike', '==', idUser)
    .where('idPostLike', '==', idPost)
    .get();
  return result;
};
