/// <reference types="cypress" />

//elements
//const TitleOfBillsPage = 'Bills'

//actions/functions
function CheckTitleOfBills(cy, TitleOfBillsPage) {
    cy.get('#app > div > h2 > div').contains(TitleOfBillsPage)
}

//exports
module.exports = {
    CheckTitleOfBills
}
