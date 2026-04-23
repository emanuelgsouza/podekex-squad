import pokemonList from "./data/pokemon.json";

/** Named resource link (PokéAPI `NamedAPIResource` shape for `type`). */
export interface PokemonTypeRef {
  name: string;
  url: string;
}

/** One slot in `pokemon.types` (PokéAPI `PokemonType` element). */
export interface PokemonTypeSlot {
  slot: number;
  type: PokemonTypeRef;
}

export interface PokemonSprite {
  front_default: string;
}

export interface Pokemon {
  id: number;
  name: string;
  types: PokemonTypeSlot[];
  sprite: PokemonSprite;
  /** Decimetres (PokéAPI). */
  height: number;
  /** Hectograms (PokéAPI). */
  weight: number;
}

const list = pokemonList satisfies Pokemon[];

export default list;
