it('comannds...',() => {
    

    //if we need to test our application, and some components need tested in specific time 
    //we can use clock to set what time we need and then run the test
    // this must be at the top of the project
    let time_now = new Date('2002 10 10');
    cy.clock(time_now);
     
    cy.visit('/');

    //to check the time set
    cy.get('#date').should('have.text','10/10/2002');

    //check our url
    cy.url().should('contain','cypress');

    //get and check ppage title
    cy.title().should('eq','Cypress Tutorials');

    //forward &backword
    cy.get('.about').click();
    cy.go('back');
    cy.go('forward');
    cy.go('back');


    //get cookie
    //to see cookes inspect -> application -> left side cookes (each cookes have name value ...)
    cy.getCookie('course').should('have.property', 'value' , 'cypress');
    // or set new cookes
    cy.setCookie('level','All levels mohammad');
    //or we can get all cookes
    cy.getAllCookies().should('have.length',3);



    //wrap => to convert from string or any variable or object to cypress

    let msg = "Hello";
    let obj = {
        name: 'Mohammad',
        Age: 30,
        Marred: true,
        LovedBook: () => {
            return obj.name + " loved " + "Life is small";
        },
    }
    cy.wrap(msg).should('eq','Hello');
    cy.wrap(obj).should('have.property','Age',30); // OR
    cy.wrap(obj).its('Age').should('eq',30);//its is return the prorperty of the object itself so we can access 
    // any property from obj by using its
    cy.wrap(obj).its('name').should('eq','Mohammad');
    //we can run property function
    cy.wrap(obj).invoke('LovedBook').should('eq','Mohammad loved Life is small');




    /*
    every element seen inside the page is a JQuery 
    so when a text present inside a page is like a called API to get the text 
    so for each element we can use this methos to check the elements and its values
    EX: we need to check the text inside id = welcome
    */
   cy.get('#welcome').should('have.text','Welcome to Cypress Tutorials');//OR IN ADVANCE
   cy.get('#welcome').then((element_obj) => {
        cy.log(element_obj);
   })
   cy.get('#welcome').invoke('text').then((element_text) => {
    cy.log(element_text);
    })
    //to cehck the results text
    cy.get('#welcome')
    .invoke('text')
    .then((element_text) => {
        cy.wrap(element_text)
        .should('eq','Welcome to Cypress Tutorials')
    })//OR in more advance
    cy.get('#welcome')
    .invoke('text')
    .then((element_text) => {//expect must be inside then command
        expect(element_text).equal('Welcome to Cypress Tutorials')
    })//OR in more advance same above
    cy.get('#welcome')
    .invoke('text')
    .then((element_text) => {
        expect(element_text).to.eq('Welcome to Cypress Tutorials')
    })
})