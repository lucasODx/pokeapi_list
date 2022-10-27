const pokeApi = {}

pokeApi.getPokemonDetails = (pokemon) => {

    return fetch(pokemon.url).then(response => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((responseBody) => { return responseBody.results })
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
        .then(detailedRequests => { return Promise.all(detailedRequests) })
        .then(pokemonDetails => {
            console.log(pokemonDetails);
        })
        .catch((error) => console.log(error));
}

function convertPokemonToHtml(pokemon) {
    return `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="details">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                        alt="${pokemon.name}">
                </div>
            </li>`
}