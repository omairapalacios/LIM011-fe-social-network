import { getUser, getDataPost } from '../controller/home-controller.js';
import { addDataPost } from '../controller/post-controller.js';

export default () => {
  const homeView = `
    <section class='profile'>
      <div class='front'></div>
      <div class='user-profile'>
        <img src='' alt='' id='user-photo' class='user-photo'>
        <div class='detail-user'>
          <span id='user-name'></span>
          <p id='user-email'></p>
        </div>
      </div>
    </section>
    <section id='container-posts-general' class='container-posts-general'>
      <div class='card-new-post'>
        <textarea name='' id='' placeholder='¿Hola, qué quieres compartir hoy?'></textarea>
        <div class='footer-new-post'>
          <i class='icon-general far fa-images'></i>
          <button class='btn-share share-post type='submit'>COMPARTIR</button>
        </div>
       </div>
      </div>
      <section id='container-posts' class='container-posts'>
    </section>
`;
  const mainELem = document.createElement('main');
  mainELem.innerHTML = homeView;
  getDataPost();
  getUser();
  const btnShare = mainELem.querySelector('button');
  btnShare.addEventListener('click', addDataPost);
  return mainELem;
};
