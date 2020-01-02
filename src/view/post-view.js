
export default (x) => {
  console.log(x);
  const postView = `
      <div class='card-post'>
        <div class='header-post'>
          <span id="user-post">${x.name}</span>
            <a href='http://'>x</a>
        </div>
        <div class='detail-post'>
        <textarea name='' id='text-post'>${x.post}</textarea>
        </div>
        <div class='footer-post'>
          <a href='http://' class='like-post'>like
            <img src='' alt=''>
          </a>
          <a href='http://' class='edit-post'>Edit
          <img src='' alt=''>
          </a>
        </div>
`;
  const divELem = document.createElement('div');
  divELem.innerHTML = postView;
  document.querySelector('#container-posts').appendChild(divELem);
};
