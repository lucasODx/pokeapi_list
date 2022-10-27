const pokemonOl = document.getElementById('pokemons');

pokeApi.getPokemons()
    .then((pokemonList = []) => {
        pokemonOl.innerHTML += pokemonList.map(convertPokemonToHtml).join('');
    })