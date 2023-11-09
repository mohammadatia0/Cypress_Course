it('Async_Alias', () => {
    var msg = 'Hello'
    cy.visit('/')
    cy.get('#welcome')
    .invoke('text')
    .then((textmsg) => {
        msg = textmsg
        cy.log(msg)//This will print Welcome to Cypress Tutorials
    })
    cy.log(msg)//this will print Hello

    /*NOTE: in cypress we should not use variables becouse of this issue
    ISSUE:
    msg outside te cypress command is back to the default value which is Hello
    Becouse cypress does not wait between cypress commands

    Cypress is Asynchronous

    */

    //Alias
    cy.reload()
    cy.get('#welcome').should('be.visible')
    let url_var = cy.url() // the url varaible is {specwindow: <window>, chainerid: ch-http://127.0.0.1:8080-21} So not work as we ned
    cy.log(url_var)

    // Now Alias
    cy.get('#welcome').should('be.visible')
    cy.url().as('url_var')//now we save the url in url_var variable
    //to print the variable
    cy.get('@url_var').then((url_text) => {
        cy.log(url_text)
    })


    /*
    NOTES:
    1- Alias is accessed from inside the test case and not accessed from outside the TC or in another TC
        So we must use Alias inside in the same TC that we use (The same it() block)

    2- best bractes to use Alias is to use it in before each because if we define alias variable in beforeech 
    the alias will accessed in any TC ot it() block inside describe/context itself
    EX: print the url from TC#1 down
    */

})

context('Use alias in before each', () => {
    before('open the url',()=>{
        cy.visit('/')
    })
    beforeEach('Get the alias variable and save it in url_var',()=>{
        cy.url().as('url_var')//if we save this inside before() not beforeeach() it will work juat for 
        //the first TC and the second TC will not se the variable
    })
    it('print the url from TC#1',()=>{
        cy.get('@url_var').then((url_text) => {
            cy.log(url_text)
        })
    })
    it('print the url from TC#2',()=>{
        cy.get('@url_var').then((url_text) => {
            cy.log(url_text)
        })
    })
})//if we svae beforeEach in e2e.js it will be seen from all files, 
//because e2e.js executed before everythingin the project