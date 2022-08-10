import Data from '../support/data';

describe('Item purchase test', () => {
  it('Adds dress to cart and purchases it', () => {
    cy.visit('/');

    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul')
      .should('be.visible')
      .click();

    cy.contains('Printed Dress').should('be.visible').click();

    cy.get('#add_to_cart').should('be.visible').click();
    cy.wait(5000);
    cy.contains('Proceed to checkout').click();
    cy.url().should('include', 'controller=order');
    cy.get('.cart_navigation > .button > span').click();

    cy.get('#email')
      .should('be.visible')
      .type('test456123@email23.com')
      .should('have.value', 'test456123@email23.com');
    cy.get('#passwd')
      .should('be.visible')
      .type('123456')
      .should('have.value', '123456');
    cy.get('#SubmitLogin').should('be.visible').click();
    cy.url().should('include', '?controller=order&step=1&multi-shipping=0');

    cy.get('.cart_navigation > .button > span').click();
    cy.url().should('contain', '?controller=order');

    cy.get('#cgv').click();

    cy.get('.cart_navigation > .button > span').click();
    cy.url().should('contain', '?controller=order&multi-shipping=');

    cy.get('.cheque').should('be.visible').click();
    cy.url().should('contain', '?fc=module&module=cheque&controller=payment');

    cy.get('.cart_navigation > .button > span').click();
    cy.url().should('contain', '?controller=order-confirmation');
    cy.get('.alert').should('have.class', 'alert alert-success');
  });
});
