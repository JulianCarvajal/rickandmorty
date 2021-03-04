const Header = () => {
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <figure class="Header-logo">
                        <img src="https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png" alt="logo">
                    </figure>
                </h1>
            </div>

            <div class="burger-menu" id="menu_button">
                <i class="fas fa-bars"></i>
            </div>

            <div class="Header-nav">
                <a href="#/about/">
                    About
                </a>
            </div>
        </div>
    `;
    return view;
}

export default Header;