import Data from '../support/data';
describe('Invalid login', () => {
  it('User login with invalid password', () => {
    cy.visit('/');
    cy.get('.login').should('be.visible').click();
    cy.get('#login_form').should('be.visible');
    cy.get('#email')
      .should('be.visible')
      .type('test456123@email23.com')
      .should('have.value', 'test456123@email23.com');
    cy.get('#passwd')
      .should('be.visible')
      .type('123456invalid')
      .should('have.value', '123456invalid');
    cy.get('#SubmitLogin').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=authentication'
    );
    cy.get('#center_column')
      .should('be.visible')
      .and('contain', 'There is 1 error');
    cy.get('ol').should('be.visible').and('contain', 'Authentication failed.');
  });
});
