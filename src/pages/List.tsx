import AppPokemonList, {
  type PokemonListArgs,
} from "../components/AppPokemonList";

function ListPage(args: PokemonListArgs) {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section-title">Arquivo de Espécimes</h1>

        <p>
          Acesse dados biológicos de alta fidelidade da fauna de Kanto.
          Selecione um espécime para ver estatísticas cinéticas detalhadas e
          trajetória evolutiva.
        </p>

        <h2 className="section-subtitle"> Região de Kanto // 001-151 </h2>

        <AppPokemonList {...args} />
      </div>
    </section>
  );
}

export default ListPage;
