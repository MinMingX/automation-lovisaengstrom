/// <reference types="cypress" />

import faker from 'faker'

//elements
const category = ':nth-child(1) > select'
const number = ':nth-child(2) > input'
const floor = ':nth-child(3) > input'
const available = '.checkbox'
const price = ':nth-child(5) > input'
const features = ':nth-child(6) > select'
const save = '.blue'

//actions/functions
function CreateRoom(cy) {
    cy.get(category).select('Double')
    let roomNumber = faker.random.number(500)
    cy.get(number).type(roomNumber)
    cy.get(floor).type('1')
    cy.get(available).click()
    cy.get(price).type(faker.random.number({ min: 15, max: 70 }))
    cy.get(features).select('Balcony')
    cy.get(save).click()
    cy.contains(roomNumber)
}

//exports
module.exports = {
    CreateRoom
}
