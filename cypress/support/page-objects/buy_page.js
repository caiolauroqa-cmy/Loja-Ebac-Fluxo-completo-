class buy{
    adicionar_carrinho({tamanho,cor,quantidade}) {
        cy.get('a[href="http://lojaebac.ebaconline.art.br/produtos/"]').eq(0).click({ force: true })
        cy.get('.product-block').eq(2).click()
        cy.get('.button-variable-item-'+ tamanho).should("be.visible").click()
        cy.get('.button-variable-item-' + cor).click() 
        cy.get('[name="quantity"]').clear().type(quantidade)
        cy.get(".single_add_to_cart_button").should("be.visible").click()

    }

} module.exports = new buy()