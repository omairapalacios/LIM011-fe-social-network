import { deleteComment } from '../model/user-post.js';

export const showComments = (event) => {
  const btnShowComment = event.target;
  const container = btnShowComment.closest('.card-post').querySelector('.container-comment');
  container.classList.toggle('hide');
};
export const eventDeleteComment = (event) => {
  const btnDeleteComment = event.target;
  const idComment = btnDeleteComment.closest('.comment').id;
  deleteComment(idComment)
    .then((doc) => {
      console.log('comentario eliminado', doc);
    })
    .catch((err) => {
      console.log(err);
    });
};
