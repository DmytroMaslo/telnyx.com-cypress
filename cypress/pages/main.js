import Page from './page'
const buttonCart = 'svg[data-icon="shopping-cart"]'
const addSIM = 'Add SIM to Cart'
const titles = "header h2"
const sliders = "[role='slider']"
const titleSwitch = 'h2 a span';
const howMuch = "//*[contains(text(),'How much will you')]"
const textSaveUp = "//*[contains(text(),'Save up to')]"
const valueTwilio = "//*[contains(text(),'/mo')]/span"
const checkBoxTollFreeNumbers = '#toll-free-numbers'

class MainPage extends Page{
    clickButtonCart(){
        cy.get(buttonCart).click()
    }
    clickCheckBoxTollFreeNumbers(){
        cy.get(titleSwitch).scrollIntoView()
        cy.get(checkBoxTollFreeNumbers).click()
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
        return cy.xpath(valueTwilio).eq(0)
    }
    scrollToSwitch(value){
        cy.scrollTo(0,value)
    }
    /**
     * @param slider number 
     */
    moveSlider(slider){
        cy.get(titleSwitch).scrollIntoView()
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