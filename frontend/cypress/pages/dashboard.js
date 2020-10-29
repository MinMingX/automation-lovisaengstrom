/// <reference types="cypress" />

//elements
const viewroomsButton = ':nth-child(1) > .btn'
const viewclientButton = '.blocks > :nth-child(2) > .btn'
const viewbillsButton = ':nth-child(3) > .btn'
const logoutButton = '.user > .btn'

//actions / functions
function ClickViewRooms(cy) {
    cy.get(viewroomsButton).click()
}

function ClickViewClient(cy) {
    cy.get(viewclientButton).click()
}

function ClickViewBills(cy) {
    cy.get(viewbillsButton).click()
}

function ClickLogout(cy) {
    cy.get(logoutButton).click()
}

//exports
module.exports = {
    ClickViewRooms,
    ClickViewClient,
    ClickViewBills,
    ClickLogout
}