describe('My First Test', () => {
  it('Visits the design system', async () => {
    cy.visit('https://design.innovaccer.com/components/overview/all-components/');
    await new Cypress.Promise<string>(() => {
      cy.get('.MenuItem.MenuItem--vertical.MenuItem--expanded').each(($el) => {
        cy.wrap($el).then(($el) => cy.wrap($el).click());
      });
    });
    // cy.log(text)
  });
});
