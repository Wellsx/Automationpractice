import Data from '../support/data';

describe('Customer Service message test', () => {
  it('Typing a sample message and uploading an image', () => {
    cy.visit('/');
    cy.get('#contact-link').should('be.visible').click();
    cy.get('#id_contact').select('Customer service').should('have.value', '2');
    cy.get('#email')
      .should('be.visible')
      .type(Data.email)
      .should('have.value', Data.email);
    cy.get('#id_order')
      .should('be.visible')
      .type('12345')
      .should('have.value', '12345');
    cy.get('#fileUpload').selectFile('cypress/support/dress.jpg');
    cy.get('#message').type(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    );
    cy.get('#submitMessage').should('be.visible').click();
    cy.get('.alert')
      .should('be.visible')
      .and('have.text', 'Your message has been successfully sent to our team.');
  });
});
