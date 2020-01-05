import { getUser, addDataProfile } from '../controller/profile-controller.js';

export default () => {
  const mainElem = document.createElement('main');
  const homeProfile = ` 
      <div class="main-profile">  
        <div class="container-update-profile">  
          <h2 class="">Perfil</h2>           
          <img class="user-photo" id='u-photo' src="https://icon-library.net/images/avatar-icon-png/avatar-icon-png-16.jpg">
          <form class="form-profile">
            <label>Nombre</label>
              <input type="text" class='input-text' id="u-name">
            <label>Email</label>
              <input type="text"  class='input-text' id="u-email">
            <label>Ocupación</label>
              <input type="text" class='input-text' id="u-ocupation">
            <div class="container-button">
              <input type="submit" class='btn button-save' id="button-save" value="Guardar">
            </div>
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
