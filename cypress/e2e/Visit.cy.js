    //only to run one test only
    it.only("by tag name",() => {
        cy.visit('/');
        cy.get('h1').first();//if we have many elements hav the same tag name and we need the first one
        cy.get('h1').last();//if we have many elements hav the same tag name and we need the last one
        cy.get('h1').eq(3);//if we have many elements hav the same tag name and we need 4th last one
        cy.get('li').filter('.web');//ifind all li elements and return li has class "web" 

        cy.get('.course-list').children('.web');//select all elements have class course-list and returen all its childerns have class web
        cy.get('.course-list').find('.web');//select all elements have class course-list and returen all its childerns have class web

        cy.get('.web').parent();//return the parent of all elements have class web
        cy.get('.web').parents();//return the parents from root to the first parent of all elements have class web
        cy.get('.web').siblings('.list1');//return all brothers have class list1 of elements have class web
        //or return all elements have class list1 with the same level of elemetns have class web
    })
    //only to run one test only
    it.only("by tag id => #id",() => {
        cy.visit('/');
        cy.get('#courses');
    })
    //only to run one test only
    it.only("by tag class => .className",() => {
        cy.visit('/');
        cy.get('.course-list');
    })
    //only to run one test only
    it.only("by tag class => .className.className",() => {
        cy.visit('/');  
        //if the element has a combound calass // have many classes names <li class="list1 web">Cypress</li>
        cy.get('.list1.web');
    })
    //only to run one test only
    it.only("by attribute",() => {
        cy.visit('/');
        cy.get('[name="Developer"]');
    })
    //only to run one test only
    it.only("by text",() => {
        cy.visit('/');
        cy.contains('javascript'); //OR
        cy.get('li').contains('javascript');
    })
