import Data from "..//support/data";

describe('Item purchase E2E', () => {
    it('Selects item and adds to cart', () => {
        
        cy.visit("http://automationpractice.com")

      cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').should('be.visible')
        .click()
        
      cy.get('#layered_id_attribute_group_2')
        .click()

      cy.get('#layered_id_feature_5')
        .click()

      cy.get('.ajax_add_to_cart_button > span').should('be.visible')
        .click()

      cy.get('.button-container > .button-medium > span')
        .click()

      cy.get('.cart_navigation > .button > span')
        .click()

      cy.get('#email_create').should('be.visible')
        .type(Data.uniqueEmailAddress).should('have.value', Data.uniqueEmailAddress)

      cy.get('#SubmitCreate > span')
        .click()

      cy.get("#customer_firstname").should("be.visible")
        .type(Data.firstName).should("have.value", Data.firstName);
        
      cy.get("#customer_lastname").should("be.visible")
        .type(Data.lastName).should("have.value", Data.lastName);

      cy.get("#email").should("be.visible")
        .and("have.value", Data.uniqueEmailAddress);

      cy.get("#passwd").should("be.visible")
        .type(Data.password).should("have.value", Data.password);

      cy.get("#firstname").should("be.visible").clear()
        .type(Data.new_firstName).should("have.value", Data.new_firstName);

      cy.get("#lastname").should("be.visible")
        .and("have.value", Data.lastName);

      cy.get("#address1").should("be.visible")
        .type(Data.address).should("have.value", Data.address);

      cy.get("#city").should("be.visible")
        .type(Data.city).should("have.value", Data.city);

      cy.get("#id_state").select(Data.state)
        .should("have.value", Data.stateValue);

      cy.get("#postcode").should("be.visible")
        .type(Data.postcode).should("have.value", Data.postcode);

      cy.get("#id_country")
        .select("United States").should("have.value", "21");

      cy.get("#phone_mobile").should("be.visible")
        .type(Data.phoneNumber).should("have.value", Data.phoneNumber);

      cy.get("#alias").should("be.visible")
        .clear().type(Data.address).should("have.value", Data.address);

      cy.get('#submitAccount > span')
        .click()

      cy.get('.cart_navigation > .button > span').should('be.visible')
        .click()

      cy.get('#cgv')
        .click()

      cy.get('.cart_navigation > .button > span').should('be.visible')
        .click()

      cy.get('.cheque')
        .click()

      cy.get('#cart_navigation > .button > span')
        .click()
   
    });
});