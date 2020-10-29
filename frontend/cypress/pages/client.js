/// <reference types="cypress" />

//elements
//const TitleOfClientPage = 'Clients'

//actions/functions
function CheckTitleOfClient(cy, TitleOfClientPage) {
    cy.get('#app > div > h2 > div').contains(TitleOfClientPage)
}

//exports
module.exports = {
    CheckTitleOfClient
}