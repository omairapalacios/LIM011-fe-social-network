import { currentUser, updateProfile } from '../model/auth-user.js';

export const eventUpdateProfile = (event) => {
  event.preventDefault();
  console.log('hi');
  
  const iduser = currentUser().uid;
  const newname = document.querySelector('#u-name');
  const newtype = document.querySelector('#u-type');

  console.log(iduser, newtype.value, newname.value);

  updateProfile(iduser, newtype.value, newname.value)
    .then((doc) => {
      window.location.hash = '#/profile';
      console.log('perfil actualizado', doc);
    })
    .catch((error) => {
      console.log(error);
    });
};
