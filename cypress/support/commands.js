Cypress.Commands.add('login', (email, password) => {
  cy.visit('/');
  cy.get('.login').should('be.visible').click();
  cy.get('#login_form').should('be.visible');
  cy.get('#email').should('be.visible').type(email).should('have.value', email);
  cy.get('#passwd')
    .should('be.visible')
    .type(password)
    .should('have.value', password);
  cy.get('#SubmitLogin').should('be.visible').click();
  cy.url().should(
    'eq',
    Cypress.config().baseUrl + '/index.php?controller=my-account'
  );
  cy.get('.page-heading').should('be.visible').and('contain', 'My account');
});
