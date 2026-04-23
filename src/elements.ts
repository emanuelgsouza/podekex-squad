const FORM$ = document.querySelector<HTMLFormElement>("#search-form");
const FORM_INPUT$ = document.querySelector<HTMLInputElement>("#search-input");
const POKEMON_LOADING$ =
  document.querySelector<HTMLParagraphElement>("#pokemon-loading");
const POKEMON_LIST$ = document.querySelector<HTMLUListElement>("#pokemon-list");

export { FORM$, FORM_INPUT$, POKEMON_LIST$, POKEMON_LOADING$ };
