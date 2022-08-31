import 'cypress-real-events/support';
describe('Top menu button tests', () => {
  it('Women menu button', () => {
    cy.visit('/');
    cy.get('[title=Women]').first().should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=3&controller=category'
    );
  });
  it('Women T-shirts hover menu button', () => {
    cy.visit('/');
    cy.get('[title=Women]').first().realHover();
    cy.get('[title="T-shirts"]').first().should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=5&controller=category'
    );
    cy.get('.category-name').should('be.visible').and('contain', 'T-shirts');
  });
  it('Women Blouses hover menu button', () => {
    cy.visit('/');
    cy.get('[title=Women]').first().realHover();
    cy.get('[title="Blouses"]').should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=7&controller=category'
    );
    cy.get('.category-name').should('be.visible').and('contain', 'Blouses');
  });
  it('Dresses menu button', () => {
    cy.visit('/');
    cy.get('[title="Dresses"]').eq(1).should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=8&controller=category'
    );
  });
  it('Casual Dresses hover menu button', () => {
    cy.visit('/');
    cy.get('[title="Dresses"]').eq(1).realHover();
    cy.get('[title="Casual Dresses"]').eq(1).should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=9&controller=category'
    );
    cy.get('.category-name')
      .should('be.visible')
      .and('contain', 'Casual Dresses');
  });
  it('Evening Dresses hover menu button', () => {
    cy.visit('/');
    cy.get('[title="Dresses"]').eq(1).realHover();
    cy.get('[title="Evening Dresses"]').eq(1).should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=10&controller=category'
    );
    cy.get('.category-name')
      .should('be.visible')
      .and('contain', 'Evening Dresses');
  });
  it('Summer Dresses hover menu button', () => {
    cy.visit('/');
    cy.get('[title="Dresses"]').eq(1).realHover();
    cy.get('[title="Summer Dresses"]').eq(1).should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=11&controller=category'
    );
    cy.get('.category-name')
      .should('be.visible')
      .and('contain', 'Summer Dresses');
  });
  it('T-Shirts menu button', () => {
    cy.visit('/');
    cy.get('[title="T-shirts"]').eq(1).should('be.visible').click();
    cy.url().should(
      'eq',
      Cypress.config().baseUrl + '/index.php?id_category=5&controller=category'
    );
    cy.get('.category-name').should('be.visible').and('contain', 'T-shirts');
  });
});
