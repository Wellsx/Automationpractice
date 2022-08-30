import Data from '../support/data';
describe('Update address', () => {
  it('Loging in and updating user address', () => {
    cy.login('test456123@email23.com', '123456');
    cy.get('[title="Addresses"]').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=addresses'
    );
    cy.get('[title="Update"]').should('be.visible').click();
    cy.get('#address1')
      .should('be.visible')
      .clear()
      .type(Data.address)
      .should('have.value', Data.address);
    cy.get('#phone')
      .should('be.visible')
      .clear()
      .type(Data.phoneNumber)
      .should('have.value', Data.phoneNumber);
    cy.get('#submitAddress').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?controller=addresses'
    );
    cy.get('.last_item')
      .find('.address_address1')
      .should('be.visible')
      .and('contain', Data.address);
  });
});
