import 'cypress-real-events/support';
describe('Removing item from cart', () => {
  it('Adding and removing an item from the cart', () => {
    cy.visit('/');
    cy.get('[title=Women]').first().realHover();
    cy.get('[title="Blouses"]').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=7&controller=category'
    );
    cy.get('.category-name').should('be.visible').and('contain', 'Blouses');

    cy.get('.product-name').should('be.visible').and('contain', 'Blouse');
    cy.get('li').find('[title="Add to cart"]').should('be.visible').click();
    cy.get('#layer_cart')
      .should('be.visible')
      .and('contain', 'Product successfully added to your shopping cart');
    cy.get('.cross').should('be.visible').click();
    cy.get('#layer_cart').should('not.be.visible');

    cy.get('[title="View my shopping cart"]').should('be.visible').realHover();
    cy.get('.remove_link').should('be.visible').click();
    cy.get('[title="View my shopping cart"]').should('contain', '(empty)');
  });
});
