import getData from '../utils/getData';

const Home = async () => {
    const characters = await getData();
    const prev = characters.info.prev;
    const next = characters.info.next;

    const before = prev ? `
        <a href="#/${prev.split('/')[5]}" class="Pages__button">
            <i class="fas fa-chevron-circle-left"></i>
        </a>`: ` `;

    const after = next ? `
        <a href="#/${next.split('/')[5]}" class="Pages__button">
            <i class="fas fa-chevron-circle-right"></i>
        </a>`: ` `;

    const view = `
    <div class="Characters">
        ${characters.results.map(character => `
            <article class="Character-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name}" />
                    <h2>${character.name}</h2>
                </a>
            </article>
        `).join('')}
    </div>

    <div class="Pages">
        ${before}${after}
    </div>
    `;
    return view;
}

export default Home;