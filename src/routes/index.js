import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Search from '../templates/Search';
import Home from '../pages/Home';
import Pages from '../pages/Pages';
import Character from '../pages/Character';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Error404 from '../pages/Error404';
import searchFunction from '../utils/searchFunction';

const routes = {
    '/': Home,
    '/:id': Character,
    '/pages': Pages,
    '/contact': 'Contact',
}

const router = async () => {
    const header = null || document.getElementById('header');
    const search = null || document.getElementById('search');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');

    header.innerHTML = await Header();
    search.innerHTML = await Search();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();

    footer.innerHTML = await Footer();

    const searchButton = document.getElementById('searchButton');
    const input = document.getElementById('searchInput');
    searchButton.addEventListener('click', searchFunction);
    input.addEventListener('keyup', ({key}) => {
        if (key == 'Enter') {
            searchFunction()
        }
    })
}

export default router;