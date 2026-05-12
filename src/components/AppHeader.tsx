import { useState } from "react";

const pokemonTypes = [
  {
    label: 'Grass',
    value: 'grass'
  },
  {
    label: 'Poison',
    value: 'poison'
  },
  {
    label: 'Water',
    value: 'water'
  }
]

interface AppHeaderArgs {
  doSearch: (payload: { name: string, type: string }) => void;
}

function AppHeader({ doSearch }: AppHeaderArgs) {
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("");

  function onSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    doSearch({ name: searchTerm, type });
  }

  return (
    <header className="header">
      <div className="container">
        <a className="header-link" href="/">
          Pokedex
        </a>

        <form onSubmit={onSubmit} id="search-form" className="search-container">
          <label htmlFor="search-input" className="visually-hidden">
            Buscar pokemons por nome
          </label>

          <input
            name="search"
            id="search-input"
            type="text"
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Buscar pokemons por nome"
          />

          <select name="type" onChange={(event) => setType(event.target.value)}>
            <option value=""> Pesquise por tipo </option>
            {pokemonTypes.map((pokemonType, index) => {
              return <option key={index} value={pokemonType.value}> {pokemonType.label} </option>
            })}
          </select>

          <button type="submit"> Buscar </button>
        </form>
      </div>
    </header>
  );
}

export default AppHeader;
