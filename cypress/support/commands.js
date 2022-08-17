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
  cy.url().should('include', 'controller=my-account');
  cy.get('.page-heading').should('contain', 'My account');
});
