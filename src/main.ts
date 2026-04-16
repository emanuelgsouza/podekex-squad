import pokemonList from "./data";
import { createElement } from "./dom";

const createPokemonCardTypes = (pokemon) => {
  const childs = pokemon.types.map((row) => {
    return createElement("li", {
      textContent: row.type.name,
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
- Colocar cores por tipo
- Refatorar código duplicado
- Calcular altura e peso
  - Peso está em hectograma
  - Altura está em decimetro
*/

const main = () => {
  const list = document.querySelector("#pokemons-list");

  for (let index = 0; index < pokemonList.length; index++) {
    const pokemon = pokemonList[index];

    const pokemonCardIdentifier = createElement("p", {
      classList: ["pokemon-card-id"],
      textContent: `#${pokemon.id}`,
    });

    const pokemonCardTypesElement = createPokemonCardTypes(pokemon);
    const pokemonCardTitle = createElement("h3", {
      textContent: pokemon.name,
    });

    const pokemanCardImage = createElement("img", {
      src: pokemon.sprite.front_default,
    });

    const pokemonCardHeight = createElement("p", {
      textContent: pokemon.height,
    });
    const pokemonCardWeight = createElement("p", {
      textContent: pokemon.weight,
    });

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

    const listElement = createElement("li", {
      classList: ["pokemon-card-item", `pokemon-${pokemon.name}`],
      id: `pokemon-index-${index}`,
      childs: [pokemonCard],
    });

    list?.appendChild(listElement);
  }
};

document.addEventListener("DOMContentLoaded", main);
