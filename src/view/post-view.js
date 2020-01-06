import {
  eventShowPostToChange,
  eventDeletePost,
  eventCountLikes,
  eventChangeTypePost,
  eventUpdatePost,
  eventAddComment,
} from '../controller/post-controller.js';

export default (userId, postId, likes, typePost, postData) => {
  const postView = `
        <div class='header-post'>
          <span id="${userId}" class='user-post name-user'>Publicado por : ${postData.name}</span>
          <a href='http://' class='delete-post'><i class="fas fa-trash"></i></a>
        </div>
        <div class='detail-post'>
          <textarea name='' id='text-post' disabled>${postData.post}</textarea>
        </div>
        <div class='footer-post'>
          <button class='like-post btn-post'>
            <i class="fas fa-heart icon-general"><span class='span-like'>${likes}</span></i>
          </button>
          <button class='update-post btn-post'>
            <i class="fas fa-edit icon-social icon-general"></i>            
          </button>
          <button class='comment-post btn-post'>
          <i class="fas fa-comments icon-social icon-general"></i>         
          </button>
          <span class='btn-save-change hidden'>Guardar Cambios</span>
          <select name="" id="type-post" class="type-post">
            <option value="1">Público</option>
            <option value="0">Privado</option>
          </select>
        </div>
        <div class='comment'>
          <div class='detail-comment'>
            <textarea name='' id='text-comment' placeholder='Escribe un comentario...'></textarea>
          </div>  
          <button class='add-comment btn-post'>
            <i class="far fa-paper-plane"></i>         
          </button> 
        </div>
        <div class='container-comments'></div>
      </div>
`;

  const divELem = document.createElement('div');
  divELem.setAttribute('class', 'card-post');
  divELem.setAttribute('id', postId);
  divELem.innerHTML = postView;
  document.querySelector('#container-posts').appendChild(divELem);

  const btnShowPost = divELem.querySelector('.update-post');
  btnShowPost.addEventListener('click', eventShowPostToChange);

  const btnUpdate = divELem.querySelector('.btn-save-change');
  btnUpdate.addEventListener('click', eventUpdatePost);

  const btnDelete = divELem.querySelector('.delete-post');
  btnDelete.addEventListener('click', eventDeletePost);

  /*  const btnShowComments = divELem.querySelector('.show-comments');
  btnShowComments.addEventListener('click', eventCommentsPost); */

  const btnAddComment = divELem.querySelector('.add-comment');
  btnAddComment.addEventListener('click', eventAddComment);

  const btnLike = divELem.querySelector('.like-post');
  btnLike.addEventListener('click', eventCountLikes);

  const select = divELem.querySelector('#type-post');
  select.value = typePost;
  select.addEventListener('change', eventChangeTypePost);
};
