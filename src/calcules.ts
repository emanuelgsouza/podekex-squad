/**
 * calculePokemonHeight converte value para metros e devolve de forma amigável
 * @param value number
 * @returns string
 */
function calculePokemonHeight(value: number | string) {
  return `${Number(value) / 10}m`;
}

/**
 * calculePokemonWeight converte value para kilos e devolve de forma amigável
 * @param value number
 * @returns string
 */
function calculePokemonWeight(value: number | string) {
  return `${Number(value) / 10}kg`;
}

export { calculePokemonWeight, calculePokemonHeight };
