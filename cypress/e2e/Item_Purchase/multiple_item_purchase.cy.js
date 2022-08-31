import 'cypress-real-events/support';
describe('Purchasing multiple items', () => {
  it('Login and purchase multiple items', () => {
    cy.login('test456123@email23.com', '123456');
    cy.get('[title=Women]').first().realHover();
    cy.get('[title="Blouses"]').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=7&controller=category'
    );
    cy.get('.category-name').should('contain', 'Blouses').and('be.visible');

    cy.get('.product-name').should('be.visible').and('contain', 'Blouse');
    cy.get('li').find('[title="Add to cart"]').should('be.visible').click();
    cy.get('#layer_cart').should(
      'contain',
      'Product successfully added to your shopping cart'
    );
    cy.get('.cross').should('be.visible').click();
    cy.get('#layer_cart').should('not.be.visible');

    cy.get('[title=Women]').first().realHover();
    cy.get('[title="Evening Dresses"]').first().should('be.visible').click();
    cy.get('.category-name')
      .should('be.visible')
      .and('contain', 'Evening Dresses');
    cy.get('.ajax_block_product')
      .should('be.visible')
      .and('contain', 'Printed Dress');
    cy.get('.ajax_add_to_cart_button > span').should('be.visible').click();
    cy.get('#layer_cart')
      .should('be.visible')
      .and('contain', 'Product successfully added to your shopping cart');
    cy.get('#layer_cart')
      .find('[title="Proceed to checkout"]')
      .first()
      .should('be.visible')
      .click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=order'
    );
    cy.get('.cart_navigation')
      .find('[title="Proceed to checkout"]')
      .should('be.visible')
      .click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=order&step=1'
    );
    cy.get('p').find('[type="submit"]').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=order'
    );
    cy.get('#cgv').click();
    cy.get('#cgv').should('be.checked');
    cy.get('p').find('[type="submit"]').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=order&multi-shipping='
    );
    cy.get('.bankwire').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl +
        '/index.php?fc=module&module=bankwire&controller=payment'
    );
    cy.get('.page-subheading')
      .should('be.visible')
      .and('contain', ' Bank-wire payment.');
    cy.get('p').find('[type="submit"]').should('be.visible').click();

    cy.get('p')
      .should('be.visible')
      .and('contain', 'Your order on My Store is complete.');
  });
});
