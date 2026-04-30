import { type Pokemon } from "../data";
import PokemonCard from "./PokemonCard";

interface PokemonListArgs {
  list: Pokemon[];
}

function AppPokemonList({ list }: PokemonListArgs) {
  return (
    <ul id="pokemon-list">
      {list.map((pokemon, index) => {
        return (
          <li
            className={`pokemon-card-item pokemon-${pokemon.name}`}
            id={`pokemon-index-${index}`}
            key={`pokemon-${pokemon.id}`}
          >
            <PokemonCard pokemon={pokemon} />
          </li>
        );
      })}
    </ul>
  );
}

export default AppPokemonList;
