import { NavLink, useParams } from "react-router";

function DetailPage() {
  const { id } = useParams();
  return (
    <section className="section">
      <div className="container">
        <p>Detalhes: {id}</p>
        <hr />
        <NavLink to="/">Voltar</NavLink>
      </div>
    </section>
  );
}

export default DetailPage;
