it("clicking...", () => {
    cy.visit('/');
    cy.get('.invoice-button').last().click();//click at the midle of the element
    cy.get('.invoice-button').first().click("topLeft",{force: true});//this will click at the of element

    cy.reload();

    cy.get('.invoice-button').click({ multiple: true });//to click on all elements that have class invoice-button

    cy.reload();

    cy.get('.hidden-button').click({force:true});//click on element that coverd from another element
    //in selenium you must remove the cover and then click on it

    cy.reload();

    //Normal way to fill email and password and click on login
    cy.get('#inputEmail').type("mohammad.atia@gmail.com");
    cy.get('#inputPassword').type("123456");
    cy.get('.form-signin > .btn').click();

    cy.reload();
    //Not normal is to put email & password and then enter key without click on login
    cy.get('#inputEmail').type("mohammad.atia@gmail.com");
    cy.get('#inputPassword').type("123456{enter}");//{enter} is sequence and not an option

    //fill covered textbox
    cy.get('#coverdInput').type('inside covered textbox',{
        //objects or options
        delay:300,//time between each char
        force: true,
    })

    //Select
    cy.get('#courses').select('appium');//Specific text, value, or index(0,1,2,...) within a <select>.

    //check box & radio buttons

    cy.get('#Nuts').check();
    cy.get('#Nuts').uncheck();
    cy.get('#Tester').check();
    //cy.get('#Tester').uncheck();

    cy.reload();
    //Right click
    cy.get('[type = "button" ][value="Click me"]').rightclick();
    if (cy.get( '[type = "button" ][value="Right Click"]'))
        console.log("Right click ok")
    else
        console.log("Right click not ok");

    cy.reload();
    //double click
    cy.get('[type = "button" ][value="Click me"]').dblclick();
    if (cy.get( '[type = "button" ][value="Double Click"]'))
        console.log("Double Click ok")
    else
        console.log("Double Click not ok");


    //foucus (means click on element) and ready to accept data 
    // blure means you are focusing on element and then you click on another element
    // So when you want to blure on element you must be focused at first
    cy.get('.focus.blur').focus();
    cy.get('.focus.blur').blur();



    //hover over & long press (mouse)
    cy.reload();
    cy.get('.trigger').trigger('mouseover');
    cy.get('.trigger').trigger('mouseout');
    cy.get('.trigger').trigger('mousedown');//long press and still press until >>
    cy.wait(5000);
    cy.get('.trigger').trigger('mouseup');

})