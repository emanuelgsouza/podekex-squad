import pokemonData from "./data";
import {
  createElement,
  createParagraph,
  createHeading,
  createImg,
} from "./dom";

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

/*
Para melhorar:
- Calcular altura e peso
  - Peso está em hectograma
  - Altura está em decimetro
*/

const listPokemon = (pokemonList) => {
  const list = document.querySelector("#pokemon-list");

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
    fragment.appendChild(createElement("li", {
      classList: ["pokemon-card-item", `pokemon-${pokemon.name}`],
      id: `pokemon-index-${index}`,
      childs: [pokemonCard],
    }));
  });

  list?.replaceChildren(fragment);
}

const loadingPokemon = (pokemonList) => {
  const element = document.querySelector<HTMLParagraphElement>('#pokemon-loading')!
  const list = document.querySelector<HTMLUListElement>('#pokemon-list')!

  list.hidden = true
  element.hidden = false
  
  setTimeout(() => {
    listPokemon(pokemonList)
    list.hidden = false
    element.hidden = true
  }, 2000)
}

const main = () => {
  const formSearch = document.querySelector<HTMLFormElement>('#search-form')

  formSearch?.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = document.querySelector<HTMLInputElement>('#search-input')
    const searchText = input?.value

    const pokemonDataFiltered = pokemonData.filter(pokemon => {
      return pokemon.name.includes(searchText)
    })

    loadingPokemon(pokemonDataFiltered)
  })

  loadingPokemon(pokemonData)
};

document.addEventListener("DOMContentLoaded", main);
