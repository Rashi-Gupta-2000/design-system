describe('My First Test', () => {
    it('Visits the design system', () => {
        cy.visit('https://design.innovaccer.com/components/helpText/usage/')
        cy.get('[alt = "Structure of Help text"]').then(($el) => {
        if ($el.hasClass('gatsby-resp-image-image')) {
            console.log("No error")
        } else {
            console.log("error")
        }
    })
    })
})