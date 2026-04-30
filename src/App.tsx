import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppPokemonList from "./components/AppPokemonList";
import pokemonListSource from "./data";

function App() {
  const [pokemonList, setList] = useState([...pokemonListSource]);

  function doSearch(value: string) {
    const term = value.toLocaleLowerCase();
    const list = pokemonListSource.filter((pokemon) => {
      return pokemon.name.includes(term);
    });

    setList(list);
  }

  return (
    <>
      <AppHeader doSearch={doSearch} />
      <section className="section">
        <div className="container">
          <h1 className="section-title">Arquivo de Espécimes</h1>

          <p>
            Acesse dados biológicos de alta fidelidade da fauna de Kanto.
            Selecione um espécime para ver estatísticas cinéticas detalhadas e
            trajetória evolutiva.
          </p>

          <h2 className="section-subtitle"> Região de Kanto // 001-151 </h2>

          <AppPokemonList list={pokemonList} />
        </div>
      </section>
    </>
  );
}

export default App;
