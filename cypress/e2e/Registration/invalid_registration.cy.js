import Data from '../../support/data';
describe('Invalid registration', () => {
  it('Registers a new user with missing mandatory fields', () => {
    cy.visit('/');

    cy.get('.login').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl +
        '/index.php?controller=authentication&back=my-account'
    );
    cy.get('#SubmitCreate').should('be.visible');

    cy.get('#email_create')
      .should('be.visible')
      .type(Data.uniqueEmailAddress)
      .should('have.value', Data.uniqueEmailAddress);
    cy.get('#SubmitCreate').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl +
        '/index.php?controller=authentication&back=my-account#account-creation'
    );
    cy.get('#submitAccount').should('be.visible').click();
    cy.get('#center_column')
      .should('be.visible')
      .and('contain', 'There are 8 errors');
    cy.get('ol')
      .children()
      .should('be.visible')
      .and('contain', 'You must register at least one phone number.')
      .and('contain', 'lastname is required.')
      .and('contain', 'firstname is required.')
      .and('contain', 'passwd is required.')
      .and('contain', 'address1 is required.')
      .and('contain', 'city is required.')
      .and(
        'contain',
        "The Zip/Postal code you've entered is invalid. It must follow this format: 00000"
      )
      .and('contain', 'This country requires you to choose a State.');
  });
});
