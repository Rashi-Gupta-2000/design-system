const buttonURLs = [
  'http://localhost:8000/foundations/principles/',
  'http://localhost:8000/components/overview/all-components/',
];

describe('Cypress Test for Docs web and mobile interface', () => {
  it('Web and Mobile buttons', () => {
    buttonURLs.forEach((url) => {
      cy.visit(url);

      //   cy.get('.Button.Button--expanded.Button--regular.Button--basic.Button--iconAlign-left').should(
      //     'have.length',
      //     '2'
      //   );

      cy.get('button').click({
        multiple: true,
        // force: true,
      }); // write button tag in place of class name
    });
  });
});
