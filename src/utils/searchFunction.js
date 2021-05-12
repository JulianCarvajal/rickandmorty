const searchFunction = () => {
    const input = document.getElementById('searchInput');

    let inputValue = input.value;
    let newLocation = `?name=${inputValue}`;

    if (location.hash) {
        location.href = `${newLocation}`;
    } else {
        location.href = `#/${newLocation}`;
    }
}

export default searchFunction;