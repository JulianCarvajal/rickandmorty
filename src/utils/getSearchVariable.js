const input = document.getElementById('searchInput');
const button = document.getElementById('searchButton');

const getSearchVariable = () => {
  let inValue;
  const getValue = () => {
      inValue = input.value;
  }

  input.addEventListener('submit', getValue);

  button.addEventListener('click', getValue)

  return inValue;
}

export default getSearchVariable;
