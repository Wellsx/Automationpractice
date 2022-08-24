describe('Adding an item to "My Wishlist"', () => {
  it('Login and add an item to wishlist', () => {
    cy.login('test456123@email23.com', '123456');
    cy.get('[title=Women]').first().click();
    cy.url().should(
      'eq',
      'http://automationpractice.com/index.php?id_category=3&controller=category'
    );

    cy.get('a').find('[title="Printed Dress"]').first().click();
    cy.get('h1').should('contain', 'Printed Dress');
    cy.get('#wishlist_button').should('be.visible').click();
    cy.get('.fancybox-error').should('contain', 'Added to your wishlist.');
    cy.get('.fancybox-item').should('be.visible').click();
    cy.get('.account').should('be.visible').click();
    cy.url().should('contain', 'controller=my-account');
    cy.get('.lnk_wishlist').should('be.visible').click();
    cy.url().should('contain', 'controller=mywishlist');
    cy.get('#block-history').should('exist').and('be.visible');
  });
});
