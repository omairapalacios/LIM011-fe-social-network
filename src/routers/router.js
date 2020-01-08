import { components } from '../utils/util-view.js';
import { getUserData, currentUser } from '../model/auth-user.js';
import { getPosts } from '../model/user-post.js';

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
          const callback = (dataPost) => {
            container.innerHTML = '';
            container.appendChild(components.header());
            container.appendChild(components.home(dataPost, response.data()));
          };
          getPosts(callback);
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
