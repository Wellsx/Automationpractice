# Automation practice

## [automationpractice.com](http://automationpractice.com/index.php?) automation testing using [Cypress.io](https://www.cypress.io/)

<details>
  <summary>Registration</summary>
  
  
  - [registration.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/Registration/registration.cy.js) - Registers a new user
  - [invalid_registration.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/Registration/invalid_registration.cy.js) - Negative test case. Register a new user with no mandatory fields filled
  - [registration_new_email.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/Registration/registration_new_email.cy.js) - Register a new user with a different email than the one used
  - [registration_new_name.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/Registration/registration_new_name.cy.js) - Register a new user with a different address name and last name
  - [registration_new_email_and_name.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/Registration/registration_new_email_and_name.cy.js) - Register a new user with a different email and name

</details>

<details>
    <summary>User Account</summary>

- [login.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/login.cy.js) - Logging in test
- [invalid_login_username.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/User_Account/invalid_login_username.cy.js) - Negative test case. Logging in with invalid username
- [invalid_login_password.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/User_Account/invalid_login_password.cy.js) - Negative test case. Logging in with invalid password
- [logout.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/User_Account/logout.cy.js) Logging user out
- [order_history.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/order_history.cy.js) - Testing the order history page
- [update_address.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/update_address.cy.js) - Logging in and updating the user delivery address
- [wishlist.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/wishlist.cy.js) - Adding an item to "My Wishlist" and creating a new wishlist

</details>

<details>
    <summary>Menu buttons</summary>

- [top_menu.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/top_menu.cy.js) - Testing all top menu and hover menu buttons
- [customer_service.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/customer_service.cy.js) - Writes an email to customer service with an image attachment
- [search.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/search.cy.js) - Testing the search bar functionality
- [Sign_in.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/Menu_Buttons/Sign_in.cy.js) Testing the Sign in button

</details>

<details>
    <summary>Item Purchase</summary>

- [single_item_purchase.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/single_item_purchase.cy.js) - Adds an item to the cart, logs the user in and purchases the item.
- [multiple_item_purchase](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/multiple_item_purchase.cy.js) - Logging the user in and purchasing multiple items
- [cart_check_out_button.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/cart_check_out_button.cy.js) - Testing cart check out button functionality
- [cart_remove_item.cy.js](https://github.com/Wellsx/Automationpractice/blob/main/cypress/e2e/cart_remove_item.cy.js) - Testing quick remove from cart button functionality

</details>
