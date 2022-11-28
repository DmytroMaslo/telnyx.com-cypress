import Page from './page'
const buttonCart = 'svg[data-icon="shopping-cart"]'
const addSIM = 'Add SIM to Cart'
const titles = "header h2"
const sliders = "[role='slider']"
const howMuch= "//*[contains(text(),'How much will you')]"
const textSaveUp= "//*[contains(text(),'Save up to')]"

class MainPage extends Page{
    clickButtonCart(){
        cy.get(buttonCart).click()
    }
    get firstTitle(){
        return cy.get(titles).eq(0)
    }
    get secondTitle(){
        return cy.get(titles).eq(1)
    }
    get saveUp(){
        return cy.xpath(textSaveUp)
    }
    moveSlider(){
        cy.scrollTo(0, 4400)
        cy.xpath(howMuch).click();
        cy.get(sliders).eq(0)
        .trigger('mousedown', { button: 0 })
        .wait(500)
        .trigger('mousemove', {
               pageX: 300,
               pageY: 105
           })
         .trigger('mouseup', { force: true });
    }

}
export default new MainPage()