import { componentes } from '../view/index.js'

export const changeView = (route) => {
    const root = document.getElementById('root');
    switch (route) {
        case '#/register':
            { return root.appendChild(componentes.register())}
        default:
            break;
    }
}
