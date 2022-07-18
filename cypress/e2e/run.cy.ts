describe('My First Test', () => {
    it('Visits the design system', () => {
        cy.visit('https://design.innovaccer.com/components/overview/all-components/')
        cy.get('.d-flex.align-items-center.overflow-hidden').should('have.length','39')
        // cy.get('.MenuItem.MenuItem--vertical.MenuItem--expanded').contains('Side sheet').click()
        function camelize(str: string) {
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
              return index === 0 ? word.toLowerCase() : word.toUpperCase();
            }).replace(/\s+/g, '');
        }

        cy.get('.MenuItem.MenuItem--vertical.MenuItem--expanded').each((item) => {
            let name = camelize(item.text())
            if(name == 'avatars') {
                name = 'avatar'
            }
            if(name == 'buttons') {
                name = 'button'
            }
            if(name == 'cards') {
                name = 'card'
            }
            if(name == 'messages') {
                name = 'message'
            }
            if(name == 'navigation-Horizontal') {
                name = 'navigationHorizontal'
            }
            if(name == 'navigation-Vertical') {
                name = 'navigationVertical'
            }
            if(name == 'sideSheet') {
                name = 'sidesheet'
            }
            const basePath = `https://design.innovaccer.com/components/${name}`;
            if(name === 'overview')
            {
                cy.visit(basePath + '/all-components/')
            }
            else{
                cy.visit(basePath + '/usage/')
            }
            // cy.wait(1000);
            if(name == 'helpText')
            {
                cy.get('[alt = "Structure of Help text"]').should('have.class','gatsby-resp-image-image')
            }
            else if(name == 'icons'){
                cy.get('[alt = "A 16x16 icon"]').should('have.class','gatsby-resp-image-image')
            }
            else if(name == 'richTextEditor'){
                cy.get('[alt = "Rich Text Editor"]').should('have.class','gatsby-resp-image-image')
            }
            else{        
                cy.get('.Card.Card--shadow-none.w-100.overflow-hidden').should('not.have.class','Message Message--alert my-7')
            }
        })

        // cy.get('.Card.Card--shadow-none.w-100.overflow-hidden').each((item) => {
        //     cy.get('[data-test-id="live-error"]').should('not.exist');
        //     cy.get('div').should('not.have.class','Message Message--alert my-7')
        // })

        // cy.get('.MenuItem.MenuItem--vertical.MenuItem--expanded').each(($el) => {
        //     cy.wrap($el).wait(15000)
        //     .click()
        // })


        // cy.get('.MenuItem.MenuItem--vertical.MenuItem--expanded').click({ multiple: true })
        // cy.get('div').should('not.have.class','Message Message--alert my-7')
    })
})