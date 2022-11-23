const closeButton = "button[aria-label='close and deny']";

module.exports = class Page{
    navigate(url){
        cy.visit(url)
    }
    closeModal(){
        cy.get(closeButton).click()
    }
    
}