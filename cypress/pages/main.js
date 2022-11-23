import Page from './page'
const buttonCart = 'svg[data-icon="shopping-cart"]'
const addSIM = 'Add SIM to Cart'
const titles = "header h2"
class MainPage extends Page{
    clickButtonCart(){
        cy.get(buttonCart).click()
    }
    clickAddSIMtoCart(){
        cy.get('button').contains(addSIM).click()
    }
    get firstTitle(){
        return cy.get(titles).eq(0)
    }
    get secondTitle(){
        return cy.get(titles).eq(1)
    }

}
export default new MainPage()