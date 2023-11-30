describe("Product Form Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get("[data-cy=link-product-form]").click();
  });

  it("Product Name input validation tests", () => {
    cy.get("[name=name]").type("Gaming Mouse 7x PC", { delay: 150 });
    cy.get("[type=submit]").should("be.enabled");

    cy.get("[name=name]").clear();
    cy.get("[type=submit]").should("be.disabled");
    cy.contains("Ürün adı boş bırakılamaz.");

    cy.get("[name=name]").type("12");
    cy.get("[type=submit]").should("be.disabled");
    cy.contains("Ürün adı 3 harften kısa olamaz.");
  });

  it("Product Price input validation tests", () => {
    cy.get("[name=price]").type("{selectall}").type("-3");
    cy.contains("Ürün fiyatı eksi değer alamaz.");
    cy.get("[type=submit]").should("be.disabled");

    cy.get("[name=color]").select("Yellow");
  });
});
