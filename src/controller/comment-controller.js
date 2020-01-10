import { deleteComment, updateComment } from '../model/user-post.js';

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

export const eventUpdateComment = (event) => {
  const btnUpdateComment = event.target;
  const idComment = btnUpdateComment.closest('.comment').id;
  const textComment = btnUpdateComment.closest('.comment').querySelector('textarea');
  updateComment(idComment, textComment.value)
    .then((doc) => {
      console.log('comentario editado', doc);
    })
    .catch((err) => {
      console.log(err);
    });
};
