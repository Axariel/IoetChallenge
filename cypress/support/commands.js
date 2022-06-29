// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


        
        
    


Cypress.Commands.add('login',(email, password)=>{
    
  cy.fixture('index').then((index)=>{
            
            
            cy.get(index.user).type(email);
            cy.get(index.password).type(password);
            cy.get(index.loginButton).click();
           
            
        })
  
})

Cypress.Commands.add('addCart',()=>{
    
           cy.fixture('index').then((index)=>{
            cy.get(index.phoneGalaxy).click();
            cy.get(index.addCart).click();
            cy.wait(1000);
            cy.get(index.addCart).click();
            
            cy.get(index.visualiceCart).click();
            cy.get(index.position1Cart).should('contain','galaxy');
            cy.get(index.position2Cart).should('contain','galaxy');
            
            
        })
        
  
})


Cypress.Commands.add('comparePrice',(price)=>{
    
           cy.fixture('index').then((index)=>{  //una vez q me has traido el json index con el alias index 
           cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should('contain',price); //validate the price outside the shopping cart
            cy.get(index.addCartBagPack).click();
            cy.get(index.shoppingCart).click();
            cy.get(index.priceProduct).should('contain',price);  //validate the prince in the shopping cart
           
        
        })
  
})