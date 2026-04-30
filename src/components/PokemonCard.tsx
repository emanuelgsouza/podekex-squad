import { calculePokemonHeight, calculePokemonWeight } from "../calcules";
import { type Pokemon } from "../data";

interface PokemonCardArgs {
  pokemon: Pokemon;
}

function CardTypes({ pokemon }: { pokemon: Pokemon }) {
  return (
    <ul className="pokemon-card-types">
      {pokemon.types.map((t) => {
        return (
          <li key={t.type.name} className={`--type-${t.type.name}`}>
            {t.type.name}
          </li>
        );
      })}
    </ul>
  );
}

function PokemonCard({ pokemon }: PokemonCardArgs) {
  return (
    <article className="pokemon-card">
      <header>
        <p className="pokemon-card-id">{`#${pokemon.id}`}</p>
        <CardTypes pokemon={pokemon} />
      </header>
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprite.front_default}
        alt={pokemon.name}
        title={pokemon.name}
      />
      <footer>
        <p>{calculePokemonHeight(pokemon.height)}</p>
        <p>{calculePokemonWeight(pokemon.weight)}</p>
      </footer>
    </article>
  );
}

export default PokemonCard;
