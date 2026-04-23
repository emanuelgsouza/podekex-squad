import {
  createElement,
  createParagraph,
  createHeading,
  createImg,
} from "./dom";
import pokemonData from "./data";
import { POKEMON_LIST$, POKEMON_LOADING$ } from "./elements";

const DELAY_DEFAULT = 2000;
const HIDE_CLASS_HELPER = "--hide";

const applyVisibility = (el, visible = true) => {
  if (!el) {
    return;
  }

  if (visible) {
    el.classList.remove(HIDE_CLASS_HELPER);
  } else {
    el.classList.add(HIDE_CLASS_HELPER);
  }
};

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
  applyVisibility(POKEMON_LIST$, false);
  applyVisibility(POKEMON_LOADING$, true);

  setTimeout(() => {
    listPokemon(pokemonList);
    applyVisibility(POKEMON_LIST$, true);
    applyVisibility(POKEMON_LOADING$, false);
  }, delay);
};

const filterPokemon = (searchText?: string) => {
  searchText = searchText?.trim() ?? "";
  const pokemonDataFiltered = pokemonData.filter((pokemon) => {
    return pokemon.name.includes(searchText);
  });

  loadingPokemon(pokemonDataFiltered, DELAY_DEFAULT / 2);
};

export { filterPokemon, loadingPokemon };
