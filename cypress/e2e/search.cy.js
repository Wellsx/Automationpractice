describe('Search function', () => {
  it('Search for an item using the search bar', () => {
    cy.visit('/');
    cy.get('#search_query_top')
      .clear()
      .type('Dress')
      .type('{enter}')
      .should('have.value', 'Dress');

    cy.url().should('contain', 'controller=search');
    cy.get('.navigation_page').should('have.text', 'Search');
    cy.get('.lighter').should('contain', 'Dress');
  });
});
