describe('Adding an item to "My Wishlist"', () => {
  it('Login and add an item to wishlist', () => {
    cy.login('test456123@email23.com', '123456');
    cy.get('[title=Women]').first().click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=3&controller=category'
    );

    cy.get('a')
      .find('[title="Printed Dress"]')
      .first()
      .should('be.visible')
      .click();
    cy.get('h1').should('be.visible').and('contain', 'Printed Dress');
    cy.get('#wishlist_button').should('be.visible').click();
    cy.get('.fancybox-error')
      .should('be.visible')
      .and('contain', 'Added to your wishlist.');
    cy.get('.fancybox-item').should('be.visible').click();
    cy.get('.account').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=my-account'
    );
    cy.get('.lnk_wishlist').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl +
        '/index.php?fc=module&module=blockwishlist&controller=mywishlist'
    );
    cy.get('#block-history').should('exist').and('be.visible');
  });
});
