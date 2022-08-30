import Data from '../support/data';

describe('Item purchase test', () => {
  it('Adds dress to cart and purchases it', () => {
    cy.visit('/');

    cy.get('[title=Women]').first().should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=3&controller=category'
    );

    cy.get('a')
      .find('[title="Printed Dress"]')
      .first()
      .should('be.visible')
      .click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_product=3&controller=product'
    );

    cy.get('#add_to_cart').should('be.visible').click();
    cy.contains('Proceed to checkout').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=order'
    );
    cy.get('p')
      .find('[title="Proceed to checkout"]')
      .should('be.visible')
      .click();

    cy.get('#email')
      .should('be.visible')
      .type('test456123@email23.com')
      .should('have.value', 'test456123@email23.com');
    cy.get('#passwd')
      .should('be.visible')
      .type('123456')
      .should('have.value', '123456');
    cy.get('#SubmitLogin').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl +
        '/index.php?controller=order&step=1&multi-shipping=0'
    );

    cy.get('p').find('[type="submit"]').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=order'
    );

    cy.get('#cgv').click();

    cy.get('p').find('[type="submit"]').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=order&multi-shipping='
    );

    cy.get('.cheque').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl +
        '/index.php?fc=module&module=cheque&controller=payment'
    );

    cy.get('p').find('[type="submit"]').should('be.visible').click();
    cy.url().should('contain', '/index.php?controller=order-confirmation');
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert alert-success');
  });
});
