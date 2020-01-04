
import { getUser, addDataProfile } from '../controller/profile-controller.js';

export default () => {
  const mainElem = document.createElement('main');
  const homeProfile = ` 
      <div class="div-main-profile">  
      <h2 class="margin">Profile</h2> 
      <div class="flex-form-profile margin">
      <img class="img-avatar margin" id='u-photo' src="https://icon-library.net/images/avatar-icon-png/avatar-icon-png-16.jpg">'
      <form class="form-profile">
      <label>Nombre</label>
        <input type="text" id="u-name">
      <label>Email</label>
        <input type="text"  id="u-email">
      <label>Ocupación</label>
        <input type="text"  id="u-ocupation">
      <input type="submit" id="button-save" value="Guardar">
      
      </form>
      </div>
      </div>
      `;

  mainElem.innerHTML = homeProfile;

  // const name = mainElem.querySelector('#name');
  // const email = mainElem.querySelector('#email');
  // const Ocupacion = mainElem.querySelector('user-type');

  // const btnregisterUser = mainElem.querySelector('.button-login');
  getUser();
  // console.log(getUser);
  // btnregisterUser.addEventListener('click');

  const btnUpdate = mainElem.querySelector('#button-save');
  btnUpdate.addEventListener('click', addDataProfile);
  return mainElem;
};
