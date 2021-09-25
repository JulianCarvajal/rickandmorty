const Header = () => {
    const view = `
        <div class="Header-main">
            <a href="/" class="Heder--home">
                <div class="Header-logo">
                    <h1>
                        <figure class="Header-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png" alt="logo">
                        </figure>
                    </h1>
                </div>
            </a>
        </div>

        <section class="Welcome">
            <h2 class="Welcome--title">
                Bienvenido!!!
            </h2>
            <p class="Welcome--text">
                Esta es una web para los amantes de Rick y Morty o aquellos que simplemente quieren conocer más acerca de este interesante multiverso lleno de comedia, paradojas y sobre todo mucha ciencia.
            </p>
            <p class="Welcome--text second">
                Aquí encontrarás una lista completa de todos los personajes de la serie y podrás ver sus principales características, además podrás buscar a tu personaje favorito por su nombre y conocer todas sus versiones en el multiverso y su estado actual. Para hacer esto utilicé la API gratuita de Rick and Morty, podrás leer más sobre ella en <a class="Welcome--link" target="_blank" href="https://rickandmortyapi.com/">Rick and Morty API</a>
            </p>
        </section>
    `;
    return view;
}

export default Header;