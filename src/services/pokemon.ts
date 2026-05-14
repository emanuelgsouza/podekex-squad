export const loadPokemonDetail = async (pokemonId: string | number) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

        if (!response.ok) throw new Error("Pokémon não encontrado");

        const data = await response.json();

        return Promise.resolve(data)
    } catch (err) {
        return Promise.reject(err)
    }
};