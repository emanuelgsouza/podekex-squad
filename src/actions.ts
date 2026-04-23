import {
  createElement,
  createParagraph,
  createHeading,
  createImg,
} from "./dom";
import pokemonData from "./data";
import { POKEMON_LIST$, POKEMON_LOADING$ } from "./elements";

const DELAY_DEFAULT = 2000;

const createPokemonCardTypes = (pokemon) => {
  const childs = pokemon.types.map((row) => {
    return createElement("li", {
      textContent: row.type.name,
      classList: [`--type-${row.type.name}`],
    });
  });

  const pokemonCardTypesElement = createElement("ul", {
    classList: ["pokemon-card-types"],
    childs,
  });

  return pokemonCardTypesElement;
};

const listPokemon = (pokemonList) => {
  const fragment = document.createDocumentFragment();

  pokemonList.forEach((pokemon, index) => {
    const pokemonCardIdentifier = createParagraph(`#${pokemon.id}`, {
      classList: ["pokemon-card-id"],
    });

    const pokemonCardTypesElement = createPokemonCardTypes(pokemon);
    const pokemonCardTitle = createHeading(pokemon.name);

    const pokemanCardImage = createImg(pokemon.sprite.front_default);

    const pokemonCardHeight = createParagraph(pokemon.height);
    const pokemonCardWeight = createParagraph(pokemon.weight);

    const pokemonCardHeader = createElement("header", {
      childs: [pokemonCardIdentifier, pokemonCardTypesElement],
    });

    const pokemonCardFooter = createElement("footer", {
      childs: [pokemonCardHeight, pokemonCardWeight],
    });

    const pokemonCard = createElement("article", {
      classList: ["pokemon-card"],
      childs: [
        pokemonCardHeader,
        pokemonCardTitle,
        pokemanCardImage,
        pokemonCardFooter,
      ],
    });
    fragment.appendChild(
      createElement("li", {
        classList: ["pokemon-card-item", `pokemon-${pokemon.name}`],
        id: `pokemon-index-${index}`,
        childs: [pokemonCard],
      }),
    );
  });

  POKEMON_LIST$?.replaceChildren(fragment);
};

const loadingPokemon = (pokemonList, delay = DELAY_DEFAULT) => {
  if (POKEMON_LIST$) {
    POKEMON_LIST$.hidden = true;
  }

  if (POKEMON_LOADING$) {
    POKEMON_LOADING$.hidden = false;
  }

  setTimeout(() => {
    listPokemon(pokemonList);
    if (POKEMON_LIST$) {
      POKEMON_LIST$.hidden = false;
    }

    if (POKEMON_LOADING$) {
      POKEMON_LOADING$.hidden = true;
    }
  }, delay);
};

const filterPokemon = (searchText) => {
  const pokemonDataFiltered = pokemonData.filter((pokemon) => {
    return pokemon.name.includes(searchText);
  });

  loadingPokemon(pokemonDataFiltered, 1000);
};

export { filterPokemon, loadingPokemon };
