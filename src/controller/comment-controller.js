import {
  deleteComment,
  updateComment,
  addComment,
  getAllComments,
} from '../model/comment-post.js';
import { currentUser } from '../model/auth-user.js';

export const showComments = (event) => {
  const btnShowComment = event.target;
  const container = btnShowComment.closest('.card-post').querySelector('.container-comment');
  container.classList.toggle('hide');
};

export const eventAddComment = (event) => {
  // agregar comentario db
  event.preventDefault();
  const btnAddComment = event.target;
  const postId = btnAddComment.closest('.card-post').id;
  const comment = btnAddComment.closest('.card-post').querySelector('#text-comment');
  const objComment = {
    idPost: postId,
    textComment: comment.value,
    user: currentUser().displayName,
  };
  if (comment.value !== '') {
    addComment(objComment)
      .then((doc) => {
        comment.value = '';
        console.log('comentario agregado exitosamente', doc);
      })
      .catch((error) => {
        console.log(error);
      });
  }
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

export const eventGetAllComments = (event) => {
  const btnGetAllComments = event.target;
  const idPost = btnGetAllComments.closest('.card-post').id;
  getAllComments()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id);
        console.log(idPost);
        console.log(doc.data().idPostComment);

        if (doc.id === idPost) {
          console.log(doc.data());
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
