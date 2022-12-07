/// <reference types="cypress" />
import MainPage from '../pages/main'

context('Main page tests', () => {
  beforeEach(() => {
    cy.fixture('texts').then(function (fdata) {
      this.data = fdata;
    });
    cy.visit('/')
    
  })

  it('Check titles on main page', function(){
    MainPage.closeModal()
    MainPage.firstTitle.should('contain.text',this.data.main.firstTitle)
    MainPage.secondTitle.should('contain.text',this.data.main.secondTitle)
  })

  it('Check Switch + Save with Telnyx form', function(){
    MainPage.scrollToSwitch(4300)
    MainPage.moveSlider(0)
    MainPage.saveUp.should('contain.text','4353')
    MainPage.moveSlider(1)
    MainPage.textValueTwilio.should('contain.text','13,586')
  })

  it('Check Switch + Save with Telnyx, Toll-free numbers', function(){
    MainPage.scrollToSwitch(4300)
    MainPage.clickCheckBoxTollFreeNumbers()
    MainPage.saveUp.should('contain.text','3257')
    MainPage.textValueTwilio.should('contain.text','5,747')
  })

})
