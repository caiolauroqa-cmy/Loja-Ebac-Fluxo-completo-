class Login {
    preencherlogin({email , password}) {
        cy.get("#username").type(email)
        cy.get("#password").type(password)
        cy.get('input[name="login"]').click()
    }
} module.exports = new Login()