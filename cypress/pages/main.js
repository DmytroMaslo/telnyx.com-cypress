import Page from './page'
const buttonCart = 'svg[data-icon="shopping-cart"]'
const addSIM = 'Add SIM to Cart'
const titles = "header h2"
const sliders = "[role='slider']"
const howMuch = "//*[contains(text(),'How much will you')]"
const textSaveUp = "//*[contains(text(),'Save up to')]"
const valueTwilio = "//*[contains(text(),'$')]"

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
    get textValueTwilio(){
        return cy.xpath(valueTwilio).eq(3)
    }
    moveSlider(slider){
        cy.scrollTo(0, 4200)
        cy.xpath(howMuch).click();
        cy.get(sliders).eq(slider)
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