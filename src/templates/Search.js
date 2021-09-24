const Search = () => {
    const view = `
        <div class="Search">
            <label class="Search--content" for="searchContent">
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