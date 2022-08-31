describe('Logout', () => {
  it('Logs the user out', () => {
    cy.visit('/');
    cy.login('test456123@email23.com', '123456');
    cy.get('.page-heading').should('be.visible').and('contain', 'My account');
    cy.get('.logout').should('be.visible').click();
    cy.get('#login_form').should('be.visible');
  });
});
