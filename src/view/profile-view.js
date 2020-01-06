import { getUserProfile, eventChangeTypeUser } from '../controller/profile-controller.js';

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
              <input type="text" disabled   class='input-text' id="u-email">
            <label>Ocupación: COMPRADOR-VENDEDOR</label>
              <input type="text" class='input-text' id="u-ocupation">
            <div class="container-button">
              <input type="submit" class='btn button-save' id="button-save" value="Guardar">
            </div>
          </form>
        </div>
      </div>
      `;

  mainElem.innerHTML = homeProfile;

  getUserProfile();

  const btnUpdate = mainElem.querySelector('#button-save');
  btnUpdate.addEventListener('click', eventChangeTypeUser);
  return mainElem;
};
