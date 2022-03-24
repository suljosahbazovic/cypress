
it('google test', () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf')
            .type('Automation step by step')
            .type('{enter}')
})