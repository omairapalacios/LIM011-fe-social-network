import { getPost } from '../model/user-post.js';
import { getUserData, currentUser } from '../model/auth-user.js';
import printPost from '../view/post-view.js';

export const getUser = () => {
  getUserData()
    .then((querySnapshot) => {
      querySnapshot.forEach((user) => {
        if (user.id === currentUser().uid) {
          document.querySelector('#user-name').textContent = user.data().displayName;
          document.querySelector('#user-email').textContent = user.data().email;
          document.querySelector('#user-photo').src = user.data().photoURL;
          document.querySelector('#user-type').textContent = user.data().typeUser;
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getDataPost = () => {
  getPost()
    .onSnapshot((querySnapshot) => {
      document.querySelector('#container-posts').innerHTML = '';
      querySnapshot.forEach((post) => {
        console.log(post.data());
        if (post.data().type === '1' || (post.data().idUser === currentUser().uid && post.data().type === '0')) {
          if (post.data().numlikes > 0) {
            const likes = (post.data().numlikes).toString();
            printPost(post.data().idUser, post.id, likes, post.data().type, post.data());
          } else {
            const likes = 0;
            printPost(post.data().idUser, post.id, likes, post.data().type, post.data());
          }
        }
      });
    });
};
