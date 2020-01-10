export default () => {
  const mainElement = document.createElement('main-modal');
  const modalProfile = `
    <div id="openModal" class="modalDialog">
    <div>
     <a href="#close" title="Close" class="close">X</a>
     <h2>Mi modal</h2>
     <p> </p>
     </div>
</div>
    `;
  mainElement.innerHTML = modalProfile;
};
