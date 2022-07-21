const localHostURL = process.env.HOST_URL || "http://localhost:8000/components/overview/all-components/"

describe('My First Test', () => {
    it('Visits the design system', () => {
        cy.visit(localHostURL)

        cy.get('.MenuItem.MenuItem--vertical.MenuItem--expanded').each((element) => {
            cy.request(element.prop('.Text.Text--default.Text--regular'))
        })
    })
})