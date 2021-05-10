const Search = () => {
    const view = `
        <div class="search">
            <form action="GET" id="searchForm">
                <label for="searchInput">
                    <input id="searchInput" type="search" class="search--bar" placeholder="Busca a tu personaje favorito ..." />
                    <button class="search--button" id="searchButton" type="submit" form="searchForm" value="Submit">
                        Buscar
                    </button>
                </label>
            </form>
        </div>
    `;
    return view;
}

export default Search;