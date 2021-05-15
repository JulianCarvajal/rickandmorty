const Search = () => {
    const view = `
        <div class="Search">
            <label for="searchInput">
                <input id="searchInput" type="search" class="search--bar" placeholder="Busca a tu personaje favorito ..." />
                <button class="search--button" id="searchButton" type="submit" value="Submit">
                    Buscar
                </button>
            </label>
        </div>
    `;
    return view;
}

export default Search;