export default (comment) => {
  console.log(comment.user);
  const commentView = `
        <span class='name-user'>${comment.user} :</span>
          <div class='detail-new-comment'> 
            <textarea class='text-comment' name='' id=''>${comment.textComment}</textarea>
          </div> 
          
        </div>
`;
  const divELem = document.createElement('div');
  divELem.setAttribute('class', 'new-comment');
  divELem.setAttribute('id', comment.idPost);
  divELem.innerHTML = commentView;
  document.querySelectorAll('.card-post').forEach((element) => {
    element.appendChild(divELem);
    console.log(element);
  });
  return divELem;
};
