import {eventUpdatePost, eventDeletePost,
} from '../controller/home.controller.js';

export default (postId, postData) => {
  console.log(postData);
  console.log(postId);

  const postView = `
      <div class='card-post' id='${postId}'>
        <div class='header-post'>
          <span id="user-post">${postData.name}</span>
          <a href='http://' class='delete-post'>x</a>
        </div>
        <div class='detail-post'>
        <textarea name='' id='text-post'>${postData.post}</textarea>
        </div>
        <div class='footer-post'>
          <button class='like-post'>like
            <img src='' alt=''>
          </button>
          <button class='update-post'>update
          <img src='' alt=''>
          </button>
        </div>
`;
  const divELem = document.createElement('div');
  divELem.innerHTML = postView;
  document.querySelector('#container-posts').appendChild(divELem);

  const btnUpdate = divELem.querySelector('.update-post');
  btnUpdate.addEventListener('click', eventUpdatePost);

  const btnDelete = divELem.querySelector('.delete-post');
  btnDelete.addEventListener('click', eventDeletePost);
};
