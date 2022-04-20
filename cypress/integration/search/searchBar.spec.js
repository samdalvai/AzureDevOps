/// <reference types="cypress" />

describe('Tests for the search bar', () => {
  
    it('should use the search bar from the home page', () => {
      cy.visit('http://localhost:8080/index.php');


      /* ==== Generated with Cypress Studio ==== */
      cy.get('.form-control').clear();
      cy.get('.form-control').type('justin bieber');
      cy.get('#search-bar > .btn').click();
      cy.get('#search-input').should('have.value', 'justin bieber');
      /* ==== End Cypress Studio ==== */
    })
  
  })
  