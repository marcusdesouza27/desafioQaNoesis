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
    guiaMedico.buscaLocalidade('Rio de Janeiro', 'Rio de Janeiro', 'UNIMED RIO');
})

Then("sera exibida uma lista de medicos disponiveis na area buscada", () => {
    guiaMedico.validaResultadoPesquisa('Rio de Janeiro');
})

Then("o resultado listado nao deve exibir a cidade Sao Paulo", () => {
    guiaMedico.validarCidadeNaoExiste('São Paulo')
    guiaMedico.navegarFwd();
})