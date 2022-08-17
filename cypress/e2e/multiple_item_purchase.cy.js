import 'cypress-real-events/support';
describe('Purchasing multiple items', () => {
  it('Login and purchase multiple items', () => {
    cy.login('test456123@email23.com', '123456');
    cy.url().should('include', 'controller=my-account');
    cy.get('[title=Women]').first().realHover();
    cy.get('[title="Blouses"]').should('be.visible').click();
    cy.get('.category-name').should('contain', 'Blouses');

    cy.get('.product-name').should('contain', 'Blouse');
    cy.get('li').find('[title="Add to cart"]').click();
    cy.get('#layer_cart').should(
      'contain',
      'Product successfully added to your shopping cart'
    );
    cy.get('.cross').should('be.visible').click();
    cy.get('#layer_cart').should('not.be.visible');

    cy.get('[title=Women]').first().realHover();
    cy.get('[title="Evening Dresses"]').first().should('be.visible').click();
    cy.get('.category-name').should('contain', 'Evening Dresses');
    cy.get('.ajax_block_product').should('contain', 'Printed Dress');
    cy.get('.ajax_add_to_cart_button > span').click();
    cy.get('#layer_cart').should(
      'contain',
      'Product successfully added to your shopping cart'
    );
    cy.get('#layer_cart').find('[title="Proceed to checkout"]').first().click();
    cy.get('.cart_navigation').find('[title="Proceed to checkout"]').click();
    cy.url().should('contain', '?controller=order');
    cy.get('p').find('[type="submit"]').click();
    cy.url().should('contain', 'controller=order');
    cy.get('#cgv').click();
    cy.get('#cgv').should('be.checked');
    cy.get('p').find('[type="submit"]').click();
    cy.get('.bankwire').should('be.visible').click();
    cy.get('.page-subheading').should('contain', ' Bank-wire payment.');
    cy.get('p').find('[type="submit"]').click();
    cy.url().should('contain', '?controller=order-confirmation');
    cy.get('p').should('contain', 'Your order on My Store is complete.');
  });
});
