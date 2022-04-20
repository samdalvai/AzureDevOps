/// <reference types="cypress" />

describe('Tests for the booking', () => {

  it('should successfully book a concert', () => {
    cy.visit('http://localhost:8080/index.php');


    /* ==== Generated with Cypress Studio ==== */
    cy.get('.form-control').clear();
    cy.get('.form-control').type('justin{enter}');

    cy.get(':nth-child(1) > :nth-child(7) > a > .text-medium').click({ force: true })
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .input-group > .form-control').clear({ force: true });
    cy.get(':nth-child(1) > .input-group > .form-control').type('Sam');
    cy.get(':nth-child(2) > .input-group > .form-control').clear({ force: true });
    cy.get(':nth-child(2) > .input-group > .form-control').type('CIccio');
    cy.get(':nth-child(3) > .input-group > .form-control').clear({ force: true });
    cy.get(':nth-child(3) > .input-group > .form-control').type('sam@ciccio.it');
    cy.get(':nth-child(5) > .input-group > .form-control').clear({ force: true });
    cy.get(':nth-child(5) > .input-group > .form-control').type('Samuel Ciccio');
    cy.get(':nth-child(6) > .input-group > .form-control').clear({ force: true });
    cy.get(':nth-child(6) > .input-group > .form-control').type('1234-1234-1234-1234');
    cy.get('[name="expMonth"]').select('3');
    cy.get('[name="expYear"]').select('26');
    cy.get('.col-sm-4 > .form-control').clear({ force: true });
    cy.get('.col-sm-4 > .form-control').type('123');
    cy.get('.sign-up-button').click();
    cy.get('h1 > .logo-style-right').should('have.text', 'Confirmed');
    /* ==== End Cypress Studio ==== */
  })

})
