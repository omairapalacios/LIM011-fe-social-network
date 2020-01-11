import { components } from '../utils/util-view.js';
import { getUserData, currentUser } from '../model/auth-user.js';
import { getPosts } from '../model/user-post.js';
import { getComments } from '../model/comment-post.js';

export const changeView = (hash) => {
  const container = document.querySelector('#container');
  container.innerHTML = '';
  switch (hash) {
    case '':
    case '#/':
    case '#/login':
      container.appendChild(components.login());
      break;
    case '#/register':
      container.appendChild(components.register());
      break;
    case '#/home':
    {
      getUserData(currentUser().uid)
        .then((response) => {
          const callbackPost = (dataPost) => {
            container.innerHTML = '';
            container.appendChild(components.header());
            container.appendChild(components.home(dataPost, response.data()));
            dataPost.forEach((post) => {
              const callbackComment = (dataComment) => {
                console.log(dataComment);
                if (dataComment.length !== 0) {
                  dataComment.forEach((comment) => {
                    const containerComment = document.querySelector(`.${post.id}`);
                    containerComment.appendChild(components.comment(comment));
                  });
                }
              };
              getComments(post.id, callbackComment);
            });
          };
          getPosts(callbackPost);
        });
      break;
    }
    case '#/profile':
      getUserData(currentUser().uid)
        .then((response) => {
          container.innerHTML = '';
          container.appendChild(components.header());
          container.appendChild(components.profile(response.data()));
        });
      break;
    default:
      container.appendChild(components.login());
  }
};
