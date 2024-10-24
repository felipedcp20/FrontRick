async function fetchRickAndMortyCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character/?page=1');
        const data = await response.json();
        const characters = data.results.slice(0, 100);
        displayCharacters(characters);
    } catch (error) {
        console.error('Error al obtener los datos de la API:', error);
    }
}

function displayCharacters(characters) {
    const container = document.getElementById('characters');
    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.className = 'col-md-4 mb-4';
        
        characterCard.innerHTML = `
            <div class="card">
                <img src="${character.image}" class="card-img-top" alt="${character.name}">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text">
                        <strong>Status:</strong> ${character.status}<br>
                        <strong>Species:</strong> ${character.species}<br>
                        <strong>Gender:</strong> ${character.gender}<br>
                        <strong>Origin:</strong> ${character.origin.name}
                    </p>
                </div>
            </div>
        `;
        
        container.appendChild(characterCard);
    });
}

fetchRickAndMortyCharacters();