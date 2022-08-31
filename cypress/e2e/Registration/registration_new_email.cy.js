import Data from '../support/data';

describe('Registration', () => {
  it('Registers a new user with a different email', () => {
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

    cy.get('#customer_firstname')
      .should('be.visible')
      .type(Data.firstName)
      .should('have.value', Data.firstName);

    cy.get('#customer_lastname')
      .should('be.visible')
      .type(Data.lastName)
      .should('have.value', Data.lastName);

    cy.get('#email')
      .should('be.visible')
      .clear()
      .type(Data.email)
      .and('have.value', Data.email);

    cy.get('#passwd')
      .should('be.visible')
      .type(Data.password)
      .should('have.value', Data.password);

    cy.get('#firstname').should('be.visible').and('have.value', Data.firstName);

    cy.get('#lastname').should('be.visible').and('have.value', Data.lastName);

    cy.get('#address1')
      .should('be.visible')
      .type(Data.address)
      .should('have.value', Data.address);

    cy.get('#city')
      .should('be.visible')
      .type(Data.city)
      .should('have.value', Data.city);

    cy.get('#id_state')
      .select(Data.state)
      .should('have.value', Data.stateValue);

    cy.get('#postcode')
      .should('be.visible')
      .type(Data.postcode)
      .should('have.value', Data.postcode);

    cy.get('#id_country').select('United States').should('have.value', '21');

    cy.get('#phone_mobile')
      .should('be.visible')
      .type(Data.phoneNumber)
      .should('have.value', Data.phoneNumber);

    cy.get('#alias')
      .should('be.visible')
      .clear()
      .type(Data.address)
      .should('have.value', Data.address);

    cy.get('#submitAccount').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=my-account'
    );
    cy.get('.logout').should('be.visible');
  });
});
