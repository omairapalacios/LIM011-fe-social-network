import { getComments } from '../model/user-post.js';
import printComment from '../view/comments-view.js';

export const showComments = (event) => {
  const btnShowComment = event.target;
  const container = btnShowComment.closest('.card-post').querySelector('.container-new-comment');
  const idPost = document.querySelector('.card-post').id;
  container.classList.toggle('hide');

  getComments(idPost)
    .then((comment) => {
      console.log(comment);
      printComment(comment.data());
    })
    .catch((error) => {
      console.log(error);
    });
};
