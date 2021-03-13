import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Home from '../pages/Home';
import Pages from '../pages/Pages';
import Character from '../pages/Character';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import showMenu from '../utils/showMenu';
import Error404 from '../pages/Error404';

const routes = {
    '/': Home,
    '/:id': Character,
    '/pages': Pages,
    '/contact': 'Contact',
}

const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();

    footer.innerHTML = await Footer();

    const button = await document.getElementById('menu_button');
    button.addEventListener('click', showMenu);
}

export default router;