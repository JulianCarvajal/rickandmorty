const searchFunction = () => {
    const input = document.getElementById('searchInput');

    let inputValue = input.value;
    let newLocation = `?name=${inputValue}`;

    location.href = `#/${newLocation}`;
}

export default searchFunction;