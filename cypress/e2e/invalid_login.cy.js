import Data from '../support/data';
describe('Invalid login', () => {
  it('User login with invalid username', () => {
    cy.visit('/');
    cy.get('.login').should('be.visible').click();
    cy.get('#login_form').should('be.visible');
    cy.get('#email')
      .should('be.visible')
      .type(Data.uniqueEmailAddress)
      .should('have.value', Data.uniqueEmailAddress);
    cy.get('#passwd')
      .should('be.visible')
      .type('123456')
      .should('have.value', '123456');
    cy.get('#SubmitLogin').should('be.visible').click();
    cy.url().should(
      'eq',
      'http://automationpractice.com/index.php?controller=authentication'
    );
    cy.get('#center_column').should('contain', 'There is 1 error');
    cy.get('ol').should('contain', 'Authentication failed.');
  });
});
