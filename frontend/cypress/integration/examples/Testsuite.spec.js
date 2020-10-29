/// <reference types="cypress" />

describe('Test of test hotel', function () {
    it('perform valid login', function () {
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get(':nth-child(1) > .btn').click()
        cy.get('h2 > .btn').click()
        cy.get(':nth-child(1) > select').select('Double')
        cy.get(':nth-child(2) > input').type('103')
        cy.get(':nth-child(3) > input').type('1')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('300')

        cy.get(':nth-child(6) > select').select('Balcony')
        cy.get('.blue').click()
        cy.get('.user > .btn').click()



    })
})