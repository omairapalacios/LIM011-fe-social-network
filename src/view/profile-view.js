import { eventUpdateProfile } from '../controller/profile-controller.js';

export default (dataUser) => {
  const mainElem = document.createElement('main');
  const homeProfile = ` 
<<<<<<< HEAD
      <div class='main-profile'>  
        <div class='container-update-profile'>  
          <h2 class=''>Perfil</h2>           
          <img class='user-photos' id='u-photo' src='${dataUser.photoURL}'>
          <form class='form-profile'>
            <label>Nombre</label>
              <input type='text' class='input-text' id='u-name' value='${dataUser.displayName}'>
            <label>Email</label>
              <input type='text' disabled class='input-text' id='u-email' value='${dataUser.email}'>
            <label>Ocupación: COMPRADOR-VENDEDOR</label>
              <select  id = "u-type" >
              <option  value = "COMPRADOR(A)" > vendedor </option>
              <option  value = "VENDEDOR(A)" > Comprador </ option>
              </select>
              <label>ACERCA DE TI </label>
              <textarea id = "u-aboutme" class='input-text' > </textarea>
              <label>PAIS:</label>
              <input id = "u-country" type='text' class='input-text' id='u-email'>
              <button type='submit' class='btn button-save' id='button-save'> GUARDAR</button>
 
          </form>
        </div>
      </div>
=======
  <div class='main-profile'>  
  <div class='container-update-profile'>  
    <h2 class=''>Perfil</h2>           
    <img class='user-photo' id='u-photo' src='${dataUser.photoURL}'>
    <form class='form-profile'>
      <label>Nombre</label>
        <input type='text' class='input-text' id='u-name' value='${dataUser.displayName}'>
      <label>Email</label>
        <input type='text' disabled class='input-text' id='u-email' value='${dataUser.email}'>
      <label>Ocupación: COMPRADOR-VENDEDOR</label>
        <select  id = "u-type" >
        <option  value = "COMPRADOR(A)" > vendedor </option>
        <option  value = "VENDEDOR(A)" > Comprador </ option>
        </select>
        <label>ACERCA DE TI </label>
        <textarea id = "u-aboutme" class='input-text' > </textarea>
        <label>PAIS:</label>
        <input id = "u-country" type='text' class='input-text' id='u-email'>
        <button type='submit' class='btn button-save' id='button-save'> GUARDAR</button>

    </form>
  </div>
</div>
>>>>>>> 21b3a1d54e15e56d3787a29c8f55807ba1e8dc10
      `;

  mainElem.innerHTML = homeProfile;

  const btnUpdate = mainElem.querySelector('#button-save');
  btnUpdate.addEventListener('click', eventUpdateProfile);
  return mainElem;
};
