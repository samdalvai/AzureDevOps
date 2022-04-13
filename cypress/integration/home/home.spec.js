/// <reference types="cypress" />

describe('Tests for the home page', () => {
  
  it('visits ConcertHub home page', () => {
    cy.visit('https://concerthubapp.azurewebsites.net/index.php');
    
    cy.url().should("include", '/index.php');
  })

})
