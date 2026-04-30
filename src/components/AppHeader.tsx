import { useState } from "react";

interface AppHeaderArgs {
  doSearch: (value: string) => void;
}

function AppHeader({ doSearch }: AppHeaderArgs) {
  const [searchTerm, setSearchTerm] = useState("");

  function onSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    doSearch(searchTerm);
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

          <button type="submit"> Buscar </button>
        </form>
      </div>
    </header>
  );
}

export default AppHeader;
