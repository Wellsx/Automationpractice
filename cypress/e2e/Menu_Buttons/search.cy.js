describe('Search function', () => {
  it('Search for an item using the search bar', () => {
    cy.visit('/');
    cy.get('#search_query_top')
      .should('be.visible')
      .clear()
      .type('Dress')
      .type('{enter}')
      .should('have.value', 'Dress');

    cy.url().should('eq', Cypress.config().baseUrl + 'controller=search');
    cy.get('.navigation_page').should('be.visible').and('have.text', 'Search');
    cy.get('.lighter').should('be.visible').and('contain', 'Dress');
  });
});
