import { addPost, updatePost } from '../model/user-post.js';

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

export const updateDataPost = (event) => {
  const btnUpdate = event.target;
  const idPost = event.target.getAtrribute('id');
  const textPost = btnUpdate.closest('.card-post').querySelector('.text-post');
  updatePost(idPost, textPost.value)
    .then((post) => {
      console.log('Post correctamente actualizado', post);
    })
    .catch((error) => {
      console.log('Error al actualizar post');
    });
};
