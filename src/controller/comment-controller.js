import { deleteComment, updateComment } from '../model/user-post.js';
import { currentUser } from '../model/auth-user.js';

export const showComments = (event) => {
  const btnShowComment = event.target;
  const container = btnShowComment.closest('.card-post').querySelector('.container-comment');
  container.classList.toggle('hide');
};
export const eventDeleteComment = (event) => {
  const btnDeleteComment = event.target;
  const idComment = btnDeleteComment.closest('.comment').id;
  const userId = btnDeleteComment.closest('.card-post').querySelector('.user-post').id;
  if (currentUser().uid === userId) {
    deleteComment(idComment)
      .then((doc) => {
        console.log('comentario eliminado', doc);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log('usted no puede eliminar este comentario, porque pertenece a otro usuario');
  }
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
