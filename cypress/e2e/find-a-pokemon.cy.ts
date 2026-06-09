describe("pokemon search", () => {
  it("finds a pokemon", () => {
    cy.visit("http://localhost:5173");
    cy.get("h1.section-title").should("contain", "Arquivo de Espécimes");
    cy.get('input[name="search"]').type("charizard");
    cy.get('button[type="submit"]').click();
    cy.get(".pokemon-card > h1").should("contain", "charizard");
  });

  it("finds a pokemon and goes to the detail page", () => {
    cy.visit("http://localhost:5173");
    cy.get("h1.section-title").should("contain", "Arquivo de Espécimes");
    cy.get('input[name="search"]').type("mime");
    cy.get('button[type="submit"]').click();
    cy.get(".pokemon-card > h1").should("contain", "mr-mime");
    cy.get(".pokemon-card > h1 > a").click();
    cy.url().should("include", "/detail/122");
    cy.get("h2").should("contain", "mr-mime");
  });

  it("finds based on type", () => {
    cy.visit("http://localhost:5173");
    cy.get("h1.section-title").should("contain", "Arquivo de Espécimes");
    cy.get('select[name="type"]').select("poison");
    cy.get('button[type="submit"]').click();
    cy.get("#pokemon-list li").should("have.length.greaterThan", 0);

    // read the link href synchronously to extract the pokemon ID before navigating
    cy.get("#pokemon-list > li").then(($items) => {
      const randomIndex = Math.floor(Math.random() * $items.length);
      const $item = $items.eq(randomIndex);
      const href = $item.find("h1 > a").attr("href") ?? "";
      const pokemonId = href.split("/").pop();
      cy.wrap($item).as("randomPokemon");
      cy.wrap(pokemonId).as("pokemonId");
    });

    cy.get("@randomPokemon").find("h1 > a").scrollIntoView().click();

    cy.get("@pokemonId").then((pokemonId) => {
      cy.url().should("include", `/detail/${pokemonId}`);
    });
  });
});
