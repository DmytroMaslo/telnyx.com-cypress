/// <reference types="cypress" />
import MainPage from '../pages/main'

context('Tests on main page', () => {
  beforeEach(() => {
    cy.fixture('texts').then(function (fdata) {
      this.data = fdata;
    });
    cy.visit('/')
    
  })

  it('Check titles on main page', function(){
    //MainPage.closeModal()
    MainPage.firstTitle.should('contain.text',this.data.main.firstTitle)
    MainPage.secondTitle.should('contain.text',this.data.main.secondTitle)
  })

})
