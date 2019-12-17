export default () => {
  const homeView = `
    <section class="profile">
      <div class="front"></div>
      <div class="user-profile">
        <img src="" alt="" class="user-photo">
        <span class="user-name">Fulana Suarez</span>
        <p class="ocupation">Developer Jr.</p>
      </div>
    </section>
    <section class="container-posts">
      <div class="card-new-post">
        <input type="text" placeholder="¿Qué quieres compartir?">
        <a href="http://" class="upload-picture">Subir<img src="" alt=""></a>
        <a href="http://" class="share-post"><button>Compartir</button></a>
      </div>
      <div class="card-post">
        <div class="header-post">
          <span>Publicado por</span>
            <a href="http://">x</a>
        </div>
        <div class="detail-post">
          <input type="text">
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
