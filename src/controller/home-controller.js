import { getPost, getComments } from '../model/user-post.js';
import { getUserData, currentUser } from '../model/auth-user.js';
import printPost from '../view/post-view.js';
import printComments from '../view/comments-view.js';

export const getUser = () => {
  getUserData()
    .then((querySnapshot) => {
      querySnapshot.forEach((user) => {
        if (user.id === currentUser().uid) {
          document.querySelector('#user-name').textContent = user.data().displayName;
          document.querySelector('#user-photo').src = user.data().photoURL;
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const getDataComments = (idPost) => {
  getComments(idPost)
    .onSnapshot((querySnapshotComment) => {
      querySnapshotComment.forEach((comment) => {
        if (idPost === comment.data().idPostComment) {
          printComments(comment.data());
        }
      });
    });
};

export const getDataPost = () => {
  getPost()
    .onSnapshot((querySnapshot) => {
      document.querySelector('#container-posts').innerHTML = '';
      querySnapshot.forEach((post) => {
        if (post.data().type === '1' || (post.data().idUser === currentUser().uid && post.data().type === '0')) {
          if (post.data().numlikes > 0) {
            const likes = (post.data().numlikes).toString();
            printPost(post.data().idUser, post.id, likes, post.data().type, post.data());
          } else {
            const likes = '';
            printPost(post.data().idUser, post.id, likes, post.data().type, post.data());
          }
        }
        getDataComments(post.id);
      });
    });
};
