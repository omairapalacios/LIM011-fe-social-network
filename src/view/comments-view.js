export default (comment) => {
  console.log(comment.user);
  const commentView = `
          <div class='detail-comment'>
            <p>${comment.user} :</p>
            <textarea name='' id=''>${comment.textComment}</textarea>
          </div>  
        </div>
`;
  const divELem = document.createElement('div');
  divELem.setAttribute('class', 'new-comment');
  divELem.setAttribute('id', comment.idPost);
  divELem.innerHTML = commentView;
  document.querySelector('.container-comments').appendChild(divELem);
  return divELem;
};
