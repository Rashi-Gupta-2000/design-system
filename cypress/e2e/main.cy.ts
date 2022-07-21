const hostURL = process.env.HOST_URL || 'http://localhost:8000';

describe('My First Test', () => {
  it('Visits the design system', () => {
    cy.visit(hostURL);
    // cy.get('.d-flex.justify-content-start.align-items-center').each((item) => {
    //     cy.contains('a').should("not.have.attr", "href", "#undefined");
    // })

    // cy.get("a:contains(#)").each($a => {
    //     const message = $a.parent().parent().text();
    //     expect($a, message).to.not.have.attr("href", "#undefined");
    // })

    // cy.get('.d-flex.justify-content-start.align-items-center').each((item) => {
    //     item.contains('a').each((link) => {
    //         cy.visit(link.attr('href'));
    //     })
    // })

    // SEARCH COMP MAC cmd + k
    // cy.get('#___gatsby').type('{k}', { force: true })

    const enter = 'button';
    cy.get('input[name="input"]').type(`${enter}{enter}`);

    // cy.get('a').should('have.length','25')
    cy.get('a').each((page) => {
      cy.request(page.prop('href'));
    });

    // cy.get('#search Links')
    // .first()
    // .invoke('attr', 'href')
    // .then((href) => console.log(href));
  });
});
