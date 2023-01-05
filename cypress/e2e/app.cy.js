describe('template spec', () => {
  const feature = "A feature to show";
  const noFeature = "No feature";

  it('feature', { env: { VITE_FEATURE_FLAG: "true" } }, () => {
    cy.visit("http://localhost:5173/");
    console.log(Cypress.env())
    cy.get("p").contains(feature).should("be.visible");
  })

  it('no feature', { env: { VITE_FEATURE_FLAG: "false" } }, () => {
    cy.visit("http://localhost:5173/");
    console.log(Cypress.env())
    cy.get("p").contains(noFeature).should("be.visible");
  })
});
