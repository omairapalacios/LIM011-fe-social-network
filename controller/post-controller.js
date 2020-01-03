import { addPost, updatePost, deletePost } from '../model/user-post.js';

export const addDataPost = (event) => {
  event.preventDefault();
  const btnShare = event.target;
  const newPost = btnShare.closest('.card-new-post').querySelector('textarea');
  addPost(newPost.value)
    .then((docRef) => {
      window.location.hash = '#/home';
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const eventUpdatePost = (event) => {
  event.preventDefault();
  const btnUpdate = event.target;
  const postId = btnUpdate.closest('.card-post').id;
  const newTextPost = btnUpdate.closest('.card-post').querySelector('#text-post');
  console.log(postId);

  updatePost(postId, newTextPost.value)
    .then((doc) => {
      console.log(doc);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const eventDeletePost = (event) => {
  event.preventDefault();
  const btnUpdate = event.target;
  const postId = btnUpdate.closest('.card-post').id;
  deletePost(postId)
    .then((doc) => {
      console.log('Documento eliminado satisfactoriamente', doc);
    })
    .catch((error) => {
      console.log(error);
    });
};
