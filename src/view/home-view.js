export default () => {
  const homeView = `
    <section class="profile">
      <div class="front"></div>
      <div class="user-profile">
        <img src="" alt="" class="user-photo">
        <div class="detail-user">
          <span class="user-name">Fulana Suarez</span>
          <p class="ocupation">Developer Jr.</p>
        </div>
      </div>
    </section>
    <section class="container-posts">
      <div class="card-new-post">
        <textarea name="" id="" placeholder="¿Qué quieres compartir?"></textarea>
        <a href="http://" class="upload-picture">Subir<img src="" alt=""></a>
        <a href="http://" class="share-post"><button>Compartir</button></a>
      </div>
      <div class="card-post">
        <div class="header-post">
          <span>Publicado por Fulanita Perez</span>
            <a href="http://">x</a>
        </div>
        <div class="detail-post">
         <textarea name="" id=""></textarea>
        </div>
        <div class="footer-post">
          <a href="http://" class="like-post">like<img src="" alt=""></a>
          <a href="http://" class="edit-post">Edit<img src="" alt=""></a>
        </div>
      </div>
    </section>
`;
  const mainELem = document.createElement('main');
  mainELem.innerHTML = homeView;
  return mainELem;
};
