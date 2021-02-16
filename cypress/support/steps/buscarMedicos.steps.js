/* global Given, Then When */
/// <reference types="cypress" />

const { HomePage } = require("../pages/homepage_pages")
const { GuiaMedico } = require("../pages/guiaMedico_pages")
const homePage = new HomePage();
const guiaMedico = new GuiaMedico();

Given("usuario esta na homepage da unimed", () => {
    homePage.loadHomepage()
})

When("usuario efetua uma pesquisa de medicos do Rio de Janeiro", () => {
    homePage.loadGuiaMedico()
    guiaMedico.validaPage();
    guiaMedico.buscaRapida('Médicos');
    guiaMedico.validaPesquisaLocalidade();
    guiaMedico.buscaLocalidade('Rio de Janeiro', 'Rio de Janeiro');
    guiaMedico.validaUnidade('UNIMED RIO')

})

Then("sera exibida uma lista de medicos disponiveis na area buscada", () => {
    cy.wait(1)

})