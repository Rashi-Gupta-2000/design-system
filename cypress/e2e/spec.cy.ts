describe('My First Test', () => {
  it('Visits the design system', () => {
    cy.visit('https://design.innovaccer.com/components/overview/all-components/');
    cy.contains('Components');
    cy.contains('Avatars');
    cy.contains('Pills').click();
    cy.url().should('include', '/components/overview/all-components/');
  });
});
