/// <reference types="cypress" />

//elements
const createroomButton = 'h2 > .btn'

//actions/functions
function ClickCreateRoom(cy) {
    cy.get(createroomButton).click()
}

//exports
module.exports = {
    ClickCreateRoom
}
