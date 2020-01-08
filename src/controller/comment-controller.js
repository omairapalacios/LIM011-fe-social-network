export const showComments = (event) => {
  const btnShowComment = event.target;
  const container = btnShowComment.closest('.card-post').querySelector('.container-new-comment');
  container.classList.toggle('hide');
};
