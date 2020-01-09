export default (comment) => {
  console.log(comment);
  const commentView = `
  <p>${comment.user}</p>
  <textarea id='text-comment' rows='5' placeholder='Ingrese comentario...' value=''>${comment.textComment}</textarea>
  <button class='add-comment btn-post'>
    <i class='far fa-paper-plane'></i>
  </button>
  `;

  const divElemComment = document.createElement('div');
  divElemComment.setAttribute('class', 'comment');
  divElemComment.setAttribute('id', comment.uid);
  divElemComment.innerHTML = commentView;

  return divElemComment;
};
