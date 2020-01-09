import
{ eventDeleteComment } from '../controller/comment-controller.js';

export default (comment) => {
  const commentView = `
  <p>${comment.user}</p>
  <textarea id='text-comment' rows='5' placeholder='Ingrese comentario...' value=''>${comment.textComment}</textarea>
  
  <button class='add-comment btn-post'>
    <i class='far fa-paper-plane'></i>
  </button>
  <button class='update-comment btn-post'>
        <i class='fas fa-edit icon-social icon-general'></i>
 </button>
      <button class='delete-comment btn-post'>
      <i class='fas fa-trash'></i>
      </button>
  `;

  const divElemComment = document.createElement('div');
  divElemComment.setAttribute('class', 'comment');
  divElemComment.setAttribute('id', comment.id);
  divElemComment.innerHTML = commentView;
  const btnDeleteComent = divElemComment.querySelector('.delete-comment');
  btnDeleteComent.addEventListener('click', eventDeleteComment);
  return divElemComment;
};
