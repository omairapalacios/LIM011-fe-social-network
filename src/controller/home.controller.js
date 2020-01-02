import { addPost } from '../model/user-post.js';

export const post = (event) => {
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
