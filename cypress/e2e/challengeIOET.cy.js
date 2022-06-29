/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


describe('Opcion 1 automatizacion e2e',()=>{
    
    beforeEach(()=>{
        
         cy.visit('https://www.saucedemo.com/');
        
        
    })
   
    it('Login id01 of matriz of test',()=>{
              
            
       cy.login('standard_user','secret_sauce');
       
       
       
            
     
  
    }) //firts test we invoque the commnas login have all the function there
    
      it('Review  diferent product in the store id04 of matriz of test',()=>{
        
     
       cy.login('standard_user','secret_sauce');
       
        cy.fixture('index').then((index)=>{  //una vez q me has traido el json index con el alias index 
            
            cy.get(index.bagpack).click();
            cy.get(index.returnPage).click();
            cy.get(index.jacket).click();
            cy.get(index.returnPage).click();
            cy.get(index.tshirt).click();
            //cy.get(index.returnPage).click();  cy.get(index.position2Cart).should('contain','galaxy');
             
           
          
        })
  
    }) //second test is no necesary commands because we dont sent any parameter
    
    it('click on add to cart directly from de online shoping id08',()=>{
        
     
       cy.login('standard_user','secret_sauce');
       
        cy.fixture('index').then((index)=>{  //una vez q me has traido el json index con el alias index 
            
            
         
            cy.get(index.addCartBagPack).click();
            cy.get(index.shoppingCart).click();
            cy.get(index.priceProduct).should('contain','$29.99');
           
          
        })
  
    }) //thirt test 
    
      it('click on add to cart directly from de online shoping id09',()=>{
        
     
       cy.login('standard_user','secret_sauce');
       
       cy.comparePrice('$29.99'); //this commans receibe a price and validate the same value with the price in the store and then the prince in the shopping cart
       
      
  
    }) //4to test 
    
      it('remove a item from the shopping cart id11',()=>{
        
     cy.login('standard_user','secret_sauce');
       
        cy.fixture('index').then((index)=>{  //una vez q me has traido el json index con el alias index 
        
            cy.get(index.addCartBagPack).click();
            cy.get(index.shoppingCart).click();
            cy.get(index.removeProduct).click();
            cy.get('.cart_list').should('contain', ''); //validate the cart is empty
          
      
        
        
        })
      
     
  
      
  
    }) //5to test 
    
        })