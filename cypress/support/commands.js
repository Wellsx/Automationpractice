Cypress.Commands.add('login', (email, password) => {
  cy.get('.login').click();
  cy.get('#email').type('test456123@email23.com');
  cy.get('#passwd').type('123456');
  cy.get('#SubmitLogin').click();
});
