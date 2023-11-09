it("Assertion Testing...", () => {
    cy.visit('/');
    cy.get('#courses').should('be.visible'); //if the element visible or should('not.be.visible')


    //have text
    cy.get('#courses').select('appium');//Specific text, value, or index(0,1,2,...) within a <select>.
    cy.get('#courses').should('contain.text','appium'); // text return is '\n        cypress\n        selenium\n        appium\n        wdiocourse\n    '
    //so  should('contain.text','appium') this will pass but not we need
    
    //cy.get('#courses').should('have.text','appium'); // this will fail (have text e'exact')

    cy.get('#courses').find('option:selected').should('have.text','appium');//this will find the selected item


    cy.get('#inputPassword').should('have.class','form-control');


    //check CSS color
    cy.get('.focus.blur').focus().should('have.css','background-color','rgb(255, 0, 0)');
    cy.get('.focus.blur').blur().should('have.css','background-color','rgb(0, 0, 255)');


    //check element have attribute
    cy.get('.invoice-button').first().should('have.attr','type','button');
})