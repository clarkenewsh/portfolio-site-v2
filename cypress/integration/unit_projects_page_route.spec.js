/* eslint-disable no-undef */

// Testing the services page route and title - TDD unit

//    1. visit services page URL
//    2. url chould include /projects url
//    2. Query for the head title of the contact page
//    3. Interact with the head title tag
//    4. The title should be contain the page title

describe('The Projects Page', () => {
  it('should visit the project page and check its url and head title tag', () => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:30000/projects')

    // Should be on a new URL which includes '/'
    // eslint-disable-next-line no-undef
    cy.url().should('include', '/projects')

    // Page title should be Services Page
    cy.get('title')
      // eslint-disable-next-line padded-blocks
      .should('have.text', 'Projects')

    // Save screenshot of test result to screenshots folder
    cy.screenshot()
  })
})

//  Cypress
// Visit a web page.
// Query for an element.
// Interact with that element.
// Assert about the content on the page.
