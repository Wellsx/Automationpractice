import Data from '../support/data';

describe('Item purchase test', () => {
  it('Adds dress to cart and purchases it', () => {
    cy.visit('/');

    cy.get('[title=Women]').first().click();
    cy.url().should(
      'eq',
      'http://automationpractice.com/index.php?id_category=3&controller=category'
    );

    cy.get('a').find('[title="Printed Dress"]').first().click();

    cy.get('#add_to_cart').should('be.visible').click();
    cy.contains('Proceed to checkout').click();
    cy.url().should('include', 'controller=order');
    cy.get('p').find('[title="Proceed to checkout"]').click();

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

    cy.get('p').find('[type="submit"]').click();
    cy.url().should('contain', '?controller=order');

    cy.get('#cgv').click();

    cy.get('p').find('[type="submit"]').click();
    cy.url().should('contain', '?controller=order&multi-shipping=');

    cy.get('.cheque').should('be.visible').click();
    cy.url().should('contain', '?fc=module&module=cheque&controller=payment');

    cy.get('p').find('[type="submit"]').click();
    cy.url().should('contain', '?controller=order-confirmation');
    cy.get('.alert').should('have.class', 'alert alert-success');
  });
});
