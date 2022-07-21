describe('My First Test', () => {
    it('Visits the design system', () => {
        cy.visit('https://design.innovaccer.com/components/overview/all-components/')
        // cy.get('h2').should('have.class','Heading Heading--xl Heading--default my-5').contains('Components')
        // cy.get('div').should('have.class','MenuItem MenuItem--vertical MenuItem--expanded').each((item) => {item.click()})
        cy.get('.d-flex.align-items-center.overflow-hidden').should('have.length','39')
        // cy.get('div').should('have.class','d-flex align-items-center overflow-hidden').should('have.length','39')
        
        cy.get('.MenuItem.MenuItem--vertical.MenuItem--expanded').contains('Side sheet').click()
        
        // const column = ['Avatars']
        // column.forEach(function(value) {
        //     cy.get('.MenuItem.MenuItem--vertical.MenuItem--expanded').should('contain', value, {timeout: 15000}).click({ multiple: true })
        // })
        
        // cy.get('.MenuItem.MenuItem--vertical.MenuItem--expanded').should('contain', 'Avatars',{timeout: 15000}).and('contain', 'Badges').each(($el) => {
        //     cy.wrap($el).click()
        // })
        // let Path;
        // const fnff = (item) => {
        //     const basePath = 'https://design.innovaccer.com/components/';
        //     if(item.text().toLowerCase() == 'overview')
        //     {
        //         Path = basePath + '/all-components/';
        //     }
        //     Path = basePath + '/usage/';
        // }

        // cy.get('.MenuItem.MenuItem--vertical.MenuItem--expanded').each((item) => {
        //     const basePath = `https://design.innovaccer.com/components/${item.text().toLowerCase()}`;
        //     if(item.text().toLowerCase() === 'overview')
        //     {
        //         cy.visit(basePath + '/all-components/')
        //     }
        //     else{
        //     cy.visit(basePath + '/usage/')
        //     }
        // })


        // cy.get('.MenuItem.MenuItem--vertical.MenuItem--expanded').each(($el) => {
        //     cy.wrap($el).wait(15000)
        //     .click()

        //     // .contains('Avatars', {timeout: 15000})

        //     // .should('be.visible') 
        //     // .click({force: true})
        //     // .parent()
        //     // .parent()
        //     // cy.get('div').should('not.have.class','Message Message--alert my-7')
        // })


        // cy.get('.MenuItem.MenuItem--vertical.MenuItem--expanded').click({ multiple: true })
        // cy.get('div').should('not.have.class','Message Message--alert my-7')


        // cy.contains('Components')
    //   cy.contains('Avatars')
    //   cy.contains('Pills').click()
        // cy.url().should('include','components/avatar/code')
        // cy.contains('Live Demo')
    // cy.get('span').should('have.class', 'Avatar1 Avatar--regular Avatar--primary')
        // cy.contains('button')
        // cy.get('Preview')


        // MAIN PAGE

        // cy.get('#search Links')
        // .first()
        // .invoke('attr', 'href')
        // .then((href) => console.log(href));

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
    })
})