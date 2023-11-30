describe("Product List sayfa testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-cy=link-products]").click();
  });

  it("Ürünler sayfasına git", () => {
    cy.get(".product-card").should("have.length", 11);
  });

  it("Ürünler sayfasında filtreleme yap", () => {
    cy.get("#products-filter").type("Miss");

    cy.get(".product-card").should("have.length", 1);
  });

  it("Product Detail link test", () => {
    cy.get(".product-card > a.btn.btn-primary").first().click();
    cy.contains("Ürün Detay");
  });
});
