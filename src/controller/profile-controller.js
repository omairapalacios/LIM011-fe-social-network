import { getUserData, currentUser } from '../model/auth-user.js';
import { addProfile } from '../model/profile-user.js';

export const getUser = () => {
  getUserData()
    .then((querySnapshot) => {
      querySnapshot.forEach((user) => {
        if (user.id === currentUser().uid) {
          document.querySelector('#u-name').value = user.data().displayName;
          document.querySelector('#u-email').value = user.data().email;
          document.querySelector('#u-photo').src = user.data().photoURL;
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addDataProfile = (event) => {
  event.preventDefault();
  const newProfileName = document.querySelector('#u-name').value;
  const newProfileEmail = document.querySelector('#u-email').value;
  const newProfileOcupation = document.querySelector('#u-ocupation').value;
  const newProfilePhoto = document.querySelector('#u-photo').value;
  addProfile(newProfileName, newProfileEmail, newProfileOcupation, newProfilePhoto)
    .then((docRef) => {
      window.location.hash = '#/profile';
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};
