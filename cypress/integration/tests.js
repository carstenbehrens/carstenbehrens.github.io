describe("Theme Switcher", () => {
  it("can change to dark theme", () => {
    cy.visit("/");

    cy.get("[data-cypress=switchTheme]").click({ force: true });
    cy.get(".content-wrapper").should("have.class", "theme-dark");
  });

  it("can change to light theme", () => {
    cy.visit("/");

    cy.get("[data-cypress=switchTheme]").click({ force: true });
    cy.get("[data-cypress=switchTheme]").click({ force: true });
    cy.get(".content-wrapper").should("have.class", "theme-light");
  });
});

describe(
  "Mobile View",
  {
    viewportWidth: 400,
  },
  () => {
    it("shows the hamburger menu", () => {
      cy.visit("/");

      cy.get("[data-cypress=menu]").should("not.exist");
      cy.get("[data-cypress=hamburger]")
        .should("exist")
        .click();
      cy.get("[data-cypress=menu]").should("exist");
    });
  }
);
