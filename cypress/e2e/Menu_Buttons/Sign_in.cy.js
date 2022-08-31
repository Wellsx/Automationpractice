describe('Sign in button', () => {
  it('Click on SignIn', () => {
    cy.visit('/');
    cy.get('.login').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl +
        '/index.php?controller=authentication&back=my-account'
    );
    cy.get('#login_form').should('be.visible');
  });
});
