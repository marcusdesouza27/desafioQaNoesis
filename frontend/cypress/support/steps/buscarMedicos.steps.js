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
    guiaMedico.validaResultadoLocal('Rio de Janeiro');
    guiaMedico.validaResultadoModalidade('Médico')
})

Then("nao deve exibir a cidade Sao Paulo nas paginas de 1 a 3", () => {
    guiaMedico.validarCidadeNaoExiste('São Paulo')
    
})