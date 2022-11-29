/// <reference types="cypress" />
import MainPage from '../pages/main'

context('Tests on main page', () => {
  beforeEach(() => {
    cy.fixture('texts').then(function (fdata) {
      this.data = fdata;
    });
    cy.visit('/')
    
  })

  it.skip('Check titles on main page', function(){
    MainPage.closeModal()
    MainPage.firstTitle.should('contain.text',this.data.main.firstTitle)
    MainPage.secondTitle.should('contain.text',this.data.main.secondTitle)
  })
  it.skip('Check Switch + Save with Telnyx, Make outbound calls', function(){
    MainPage.moveSlider(0)
    MainPage.saveUp.should('contain.text','4353')
  })

  it('Check Switch + Save with Telnyx, Receive inbound calls', function(){
    MainPage.moveSlider(1)
    MainPage.textValueTwilio.should('contain.text','9,002')
  })


})
