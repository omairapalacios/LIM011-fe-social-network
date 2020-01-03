import { getUserData, currentUser } from '../model/auth-user.js';

export const getUser = () => {
  getUserData()
    .then((querySnapshot) => {
      querySnapshot.forEach((user) => {
        if (user.id === currentUser().uid) {
          document.querySelector('#u-name').textContent = user.data().displayName;
          document.querySelector('#u-email').textContent = user.data().email;
          document.querySelector('#u-photo').src = user.data().photoURL;
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
