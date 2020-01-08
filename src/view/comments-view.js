export default (comment) => {
  console.log(comment);
  const commentView = `
  <div class="container-comment">
  <textarea id="text-comment" rows="5" placeholder="Ingrese comentario..."></textarea>
  <button class='add-comment btn-post'>
    <i class="far fa-paper-plane"></i>
  </button>
</div>`;

  const divElemComment = document.createElement('div');
  divElemComment.setAttribute('class', 'comment');
  divElemComment.innerHTML = commentView;

  return divElemComment;
};
