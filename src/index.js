import { changeView } from './view-controller/router.js';

const init = () => {
    changeView(window.location.hash);
}

document.getElementById('options').addEventListener('click', init);

init();