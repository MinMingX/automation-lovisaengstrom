/// <reference types="cypress" />

import * as indexfuncs from '../../pages/indexPage'
import * as dashboardfuncs from '../../pages/dashboard'
import * as roomfuncs from '../../pages/room'
import * as createfuncs from '../../pages/create'
import * as targets from '../../targets/targets'
import * as clientfuncs from '../../pages/client'
import * as billsfuncs from '../../pages/bills'

//testsuite
describe('Test suite', function () {

    beforeEach(() => {
        cy.visit(targets.base_url)
    })

    //Test case
    it('login, logout', function () {
        indexfuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardfuncs.ClickLogout(cy)
    })
    it('create room', function () {
        indexfuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardfuncs.ClickViewRooms(cy)
        roomfuncs.ClickCreateRoom(cy)
        createfuncs.CreateRoom(cy)
        dashboardfuncs.ClickLogout(cy)
    })
    it('check room', function () {
        indexfuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardfuncs.ClickViewRooms(cy, 'Rooms')
        dashboardfuncs.ClickLogout(cy)

    })
    it('check client', function () {
        indexfuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardfuncs.ClickViewClient(cy)
        clientfuncs.CheckTitleOfClient(cy, 'Clients')
        dashboardfuncs.ClickLogout(cy)
    })
    it('check bills', function () {
        indexfuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
        dashboardfuncs.ClickViewBills(cy)
        billsfuncs.CheckTitleOfBills(cy, 'Bills')
        dashboardfuncs.ClickLogout(cy)


    })

})