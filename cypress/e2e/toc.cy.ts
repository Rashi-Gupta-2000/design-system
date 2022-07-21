const tocURLs = ['http://localhost:8000/introduction/get-started/designers/','http://localhost:8000/introduction/get-started/developers/']

describe('Docs introduction page', () => {
    it('Table of Contents', () => {
        tocURLs.forEach(url => {
            cy.visit(url)
            cy.get('.right-nav-container > ul > li > div > a').each(page => {
                cy.request(page.prop('href'))
                // cy.get('.Heading.Heading--default.mr-4').should('have.text',`${page.text()}`)
                // expect('.Heading.Heading--default.mr-4').to.contain(`${page.text()}`);
            }) // scroll?

            cy.get('.right-nav-container > ul > li > ul > li > div > a').each(page => {
                cy.request(page.prop('href'))
            }) // scroll?

        });
    })
})