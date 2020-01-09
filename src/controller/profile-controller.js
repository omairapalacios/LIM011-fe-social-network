import { currentUser, updateProfile } from '../model/auth-user.js';

export const eventUpdateProfile = (event) => {
  event.preventDefault();
  const iduser = currentUser().uid;
  const newname = document.querySelector('#u-name');
  const newtype = document.querySelector('#type');

  updateProfile(iduser, newname.value, newtype.value)
    .then((doc) => {
      console.log(doc);
    })
    .catch((error) => {
      console.log(error);
    });
};
