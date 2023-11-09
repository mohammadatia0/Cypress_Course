

describe("group #1 ...",() =>{
    before(() => {
        cy.log("I'm in before");
    })
    beforeEach(() =>{
        cy.log("I'm in beforeEach");
    })
    it("TestCase 1",function()
    {
        cy.log("i'm here...TestCase 1");
        cy.visit("www.google.com");
    })
    it("TestCase 2",function()
    {
        cy.log("i'm here...TestCase 2");
    })
    it("TestCase 3",function()
    {
        cy.log("i'm here...TestCase 3");
    })

    after(() => {
        cy.log("I'm in after");
    })
    afterEach(() => {
        cy.log("I'm in afterEach");
    })
})


context("group #2 ...",() => {
    before(() => {
        cy.log("I'm in before");
    })
    beforeEach(() =>{
        cy.log("I'm in beforeEach");
    })
    it("TestCase 4",function()
    {
        cy.log("i'm here...TestCase 4");
    })
    it("TestCase 5",function()
    {
        cy.log("i'm here...TestCase 5");
    })
    after(() => {
        cy.log("I'm in after");
    })
    afterEach(() => {
        cy.log("I'm in afterEach");
    })
})
