/// <reference types="cypress" />

import dados_login from "../fixtures/dados_login.json"
import dados_produto from "../fixtures/dados_produto.json"

const login = require("../support/page-objects/login_page")
const buy = require("../support/page-objects/buy_page")

beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
})

it('Deve Logar usuário com sucesso e adicionar item ao carrinho', () => {
    login.preencherlogin(dados_login)
    buy.adicionar_carrinho(dados_produto)
})
