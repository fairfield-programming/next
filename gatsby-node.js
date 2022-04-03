const axios = require('axios');

const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`);
      const abilities = await Promise.all(
        pokemon.abilities.map(async ({ ability: { name: abilityName } }) => {
          const { data: ability } = await get(`/ability/${abilityName}`);

          return ability;
        })
      );

      return { ...pokemon, abilities };
    })
  );

exports.createPages = async ({ actions: { createPage } }) => {
  const allPokemon = await getPokemonData(['pikachu', 'charizard', 'squirtle']);

  // Create a page that lists all Pokémon.
//   createPage({
//     path: `/`,
//     component: require.resolve('./src/templates/all-pokemon.js'),
//     context: { allPokemon }
//   });

  // Create a page for each Pokémon.
  allPokemon.forEach(pokemon => {
    createPage({
      path: `/user/${pokemon.name}/`,
      component: require.resolve('./src/templates/user.js'),
      context: { pokemon }
    });
  });
};