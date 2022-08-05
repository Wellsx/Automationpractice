describe('Login', () => {
  it('User login', () => {
    cy.visit('/');
    cy.get('.login').should('be.visible').click();
    cy.get('#login_form').should('be.visible');
    cy.get('#email')
      .should('be.visible')
      .type('test456123@email23.com')
      .should('have.value', 'test456123@email23.com');
    cy.get('#passwd')
      .should('be.visible')
      .type('123456')
      .should('have.value', '123456');
    cy.get('#SubmitLogin').should('be.visible').click();
    cy.url().should('include', 'controller=my-account');
    cy.get('.page-heading').should('contain', 'My account');
  });
});
