import { updateDataPost } from '../controller/post-controller.js';

export default (post) => {
  console.log(post);
  const postView = `
      <div class='card-post'>
        <div class='header-post'>
          <span class="user-post">${post.data().name}</span>
            <a href='http://'>x</a>
        </div>
        <div class='detail-post'>
        <textarea name='' class='text-post'>${post.data().post}</textarea>
        </div>
        <div class='footer-post'>
          <a href='http://' class='like-post'>like
            <img src='' alt=''>
          </a>
          <a href='http://' class='btn-update' id='${post.id}'>Editar
          <img src='' alt=''>
          </a>
        </div>

`;
  const divELem = document.createElement('div');
  divELem.innerHTML = postView;
  document.querySelector('#container-posts').appendChild(divELem);

  const btnUpdate = divELem.querySelector('.btn-update');
  btnUpdate.addEventListener('click', updateDataPost);
};
