/// <reference types="cypress" />

describe('Tests for the home page', () => {
  
  it('visits ConcertHub home page', () => {
    cy.visit('http://localhost:8080/index.php');
    
    cy.url().should("include", '/index.php');
  })

})
