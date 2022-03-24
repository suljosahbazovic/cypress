it('learning assertions', () => {
        cy.visit('https://example.cypress.io/')
        cy.contains('get').click()

        cy.get('#query-btn')
                .should('contain', 'Button')
                .should('have.class', 'query-btn btn btn-primary')
                .should('be.visible')
                .should('be.enabled')

        cy.get('#query-btn').invoke('attr', 'id')
                .should('equal', 'query-btn')

        cy.get('#query-btn')
                .should('contain', 'Button')
                .and('have.class', 'query-btn btn btn-primary')

        expect(true).to.be.true

        let name = 'Suljo'
        expect(name).to.be.equal('Suljo')

        assert.equal(4, 4, 'No equal')
        assert.strictEqual(4, 4, 'not strictly equal')

        /// test test
        ///
})