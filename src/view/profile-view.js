
export default () => {
  const profileView = ` 
    <h2 class="margin">Profile</h2> 
    <aside class="aside-photoperfil"> 
    <img class="img-avatar margin" src="https://icon-library.net/images/avatar-icon-png/avatar-icon-png-16.jpg">
    </aside>
    <section class='section-dataprofile>
    <form class="form-profile">
    <label>Nombre</label>
    <input type="text" value="" class="inputForm" id="name">
    <label>Email</label>
    <input type="text" value="" disabled class="inputForm" id="email">
    <label>Ocupación</label>
    <input type="text" value="" class="inputForm" id="job">
    <input type="submit" class="button-login" id="button-save" value="Guardar">
    <input type="submit" class="button-login" id="button-return" value="Regresar">
    </form>
    </section>
    `;
  const mainElem = document.createElementElement('main');
  mainElem.innerHTML = profileView;
  return mainElem;
};
