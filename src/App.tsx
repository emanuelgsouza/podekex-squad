import "./App.css";

import { useState } from "react";
import { Routes, Route } from "react-router";

import AppHeader from "./components/AppHeader";
import pokemonListSource from "./data";
import ListPage from "./pages/List";
import DetailPage from "./pages/Detail";

function App() {
  const [pokemonList, setList] = useState([...pokemonListSource]);

  function doSearch({ name, type }: { name: string, type: string }) {
    const term = name.toLocaleLowerCase();
    const list = pokemonListSource
      .filter((pokemon) => {
        return pokemon.name.includes(term);
      })
      .filter((pokemon) => {
        return pokemon.types.some((pokemonType) => {
          return pokemonType.type.name === type
        })
      })

    setList(list);
  }

  return (
    <>
      <AppHeader doSearch={doSearch} />
      <Routes>
        <Route path="/" element={<ListPage list={pokemonList} />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </>
  );
}

// App -> AppHeader
//     -> AppPokemonList -> PokemonCard

export default App;
