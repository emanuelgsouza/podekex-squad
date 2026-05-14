import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import { loadPokemonDetail } from "../services/pokemon";

function DetailPage() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  // o useEffect será executado após a montagem do meu componente
  // ou quando a propriedade id for modificada
  useEffect(() => {
    if (id) {
      loadPokemonDetail(id)
        .then((pokemon) => {
          setPokemon(pokemon)
        })
        .catch((err) => {
          setError(err)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [id]);

  if (loading) return <div className="loader">Buscando na grama alta...</div>;
  if (error) return <div className="error">Ops! {error}</div>;

  return (
    <div className="pokemon-card">
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <h2>{pokemon.name}</h2>
      <div className="types">
        {pokemon.types.map((t) => (
          <span key={t.type.name}>{t.type.name}</span>
        ))}
      </div>

      <NavLink to="/">Voltar</NavLink>
    </div>
  );
}

export default DetailPage;
