// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

it('says hello', function () {
  cy.visit('/')
  cy.contains('Hi there!').should('be.visible')
})

// more examples
//
// https://github.com/cypress-io/cypress-example-todomvc
// https://github.com/cypress-io/cypress-example-kitchensink
// https://on.cypress.io/writing-your-first-test
