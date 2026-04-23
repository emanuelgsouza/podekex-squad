import pokemonData from "./data";
import { filterPokemon, loadingPokemon } from "./actions";
import { FORM$, FORM_INPUT$ } from "./elements";

/*
Para melhorar:
- Calcular altura e peso
  - Peso está em hectograma
  - Altura está em decimetro
*/

const main = () => {
  FORM$?.addEventListener("submit", (event) => {
    event.preventDefault();

    filterPokemon(FORM_INPUT$?.value);
  });

  loadingPokemon(pokemonData);
};

document.addEventListener("DOMContentLoaded", main);
