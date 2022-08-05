describe('Purchasing multiple items', () => {
  it('Login and purchase multiple items', () => {
    cy.visit('/');
    cy.login('test456123@email23.com', '123456');
    cy.url().should('include', 'controller=my-account');
    cy.get('.sf-menu > :nth-child(1)')
      .should('contain', 'Women')
      .and('be.visible');
    cy.get('.submenu-container > :nth-child(1) > ul > :nth-child(2) > a')
      .should('be.hidden')
      .invoke('show')
      .click({ force: true });
    cy.get('.category-name').should('contain', 'Blouses');

    cy.get('.product-name').should('contain', 'Blouse');
    cy.get('.ajax_add_to_cart_button > span').click();
    cy.get('#layer_cart').should(
      'contain',
      'Product successfully added to your shopping cart'
    );
    cy.wait(4000);
    cy.get('.cross').should('be.visible').click();
    cy.get('#layer_cart').should('not.be.visible');

    cy.get('.sf-menu > :nth-child(2)')
      .should('be.visible')
      .trigger('mouseover');
    cy.get(':nth-child(2) > .submenu-container > :nth-child(2) > a').click({
      force: true,
    });
    cy.get('.category-name').should('contain', 'Evening Dresses');
    cy.get('.ajax_block_product').should('contain', 'Printed Dress');
    cy.get('.ajax_add_to_cart_button > span').click();
    cy.get('#layer_cart').should(
      'contain',
      'Product successfully added to your shopping cart'
    );
    cy.get('.button-container > .button-medium > span').click({ force: true });

    cy.get('.cart_navigation > .button > span').should('be.visible').click();
    cy.url().should('include', 'controller=order&step=1');
    cy.get('.cart_navigation > .button > span').should('be.visible').click();
    cy.get('#cgv').should('not.be.checked').click();
    cy.get('.cart_navigation > .button > span').should('be.visible').click();
    cy.url().should('include', 'controller=order&multi-shipping=');
    cy.get('.bankwire').should('be.visible').click();
    cy.get('.page-subheading').should('contain', 'Bank-wire payment.');
    cy.get('#cart_navigation > .button > span').should('be.visible').click();
    cy.get('.cheque-indent').should(
      'contain',
      'Your order on My Store is complete.'
    );
    cy.url().should('contain', 'controller=order-confirmation');
  });
});
