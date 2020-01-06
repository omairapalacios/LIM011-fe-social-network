import { getUserData, currentUser, updatetypeProfile } from '../model/auth-user.js';

export const getUserProfile = () => {
  getUserData()
    .then((querySnapshot) => {
      querySnapshot.forEach((user) => {
        if (user.id === currentUser().uid) {
          document.querySelector('#u-name').value = user.data().displayName;
          document.querySelector('#u-email').value = user.data().email;
          document.querySelector('#u-photo').src = user.data().photoURL;
          document.querySelector('#u-ocupation').value = user.data().typeUser;
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
export const eventChangeTypeUser = (event) => {
  event.preventDefault();
  const newnameUser = document.querySelector('#u-name').value;
  const newtypeUser = document.querySelector('#u-ocupation').value;
  const newemail = document.querySelector('#u-email').value;
  updatetypeProfile(newnameUser, newtypeUser, newemail);
};
