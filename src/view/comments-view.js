import { eventAddComment } from '../controller/post-controller.js';

export default (postId, comment) => {
  console.log(comment);
  const commentView = `
          <div class='detail-comment'>
            <textarea name='' id='${postId}' placeholder='Escribe un comentario...'>${comment.textComment}</textarea>
          </div>  
          <button class='add-comment btn-post'>
            <i class="far fa-paper-plane"></i>         
          </button> 
        </div>
`;
  const divELem = document.createElement('div');
  divELem.setAttribute('class', 'comment');
  divELem.setAttribute('id', postId);
  divELem.innerHTML = commentView;
  document.querySelector('.container-comments').appendChild(divELem);

  const btnAddComment = divELem.querySelector('.add-comment');
  btnAddComment.addEventListener('click', eventAddComment);
};
