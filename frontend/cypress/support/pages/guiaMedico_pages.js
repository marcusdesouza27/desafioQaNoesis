const currentPagebar = 'li[class="pagina-atual aria-current="]'
const linkBuscaRapida = 'a[id="busca_rapida"]'
const linkBuscaDetalhada = 'a[id="busca_detalhada"]'
const inputPesquisa = 'input[id="campo_pesquisa"]'
const checboxUrgencia = 'input[id="urgencia-emergencia"]'
const linkSubstituicaodePrestadores = 'a[class*="margin-left-3x"]'
const inputCPF = 'input[id="input_cpf"]'
const btnPesquisar = 'button[id="btn_pesquisar"]'
const localidadeGuiMedico = 'div[id="texto_selecione_unimed"]'
const selectEstado = '.selecione-rede.big-field.pesquisa-avancada > div > div > div.css-k71zgk'
const conteudoEstado = '.conteudo-gm'
const selectCidadde = 'div.s-field.control-group.selecione-plano.big-field.pesquisa-avancada > div > div > div.css-k71zgk'
const opcoesCidade = '//div[@id="app"]/div/div/div/div/div/form/div/div[2]/div/div[2]/div'
const labelUnidade = 'label[class="margin-bottom fonte-padrao"]'
const radioUnidade = 'input[type="radio"]'
const btnContinuar = 'button[class="btn btn-success"]'
const resultado = position => `#resultado${position} > .resultado-resumido`
const indiceProximo = 'a[class="proximo"]'
const resultCity = desc => `//span[contains(.,"${desc}")]`
const resultModalidade = 'p[class="tr5"]'

export class GuiaMedico {
    validaPage() {
        cy.get(currentPagebar, { timeout: Cypress.config().global_timeout }).should('contain', 'Guia Médico')
    }

    buscaRapida(filtroPesquisa) {
        cy.get(inputPesquisa, { timeout: Cypress.config().global_timeout }).type(filtroPesquisa);
        cy.get(btnPesquisar, { timeout: Cypress.config().global_timeout }).click();
    }

    validaPesquisaLocalidade() {
        cy.get(localidadeGuiMedico, { timeout: Cypress.config().global_timeout }).should('contain', 'Selecione o estado e a cidade para localizar a Unimed onde você deseja ser atendido:');
    }

    buscaLocalidade(estado, cidade) {
        cy.get(selectEstado, { timeout: Cypress.config().global_timeout }).click();
        cy.get(conteudoEstado, { timeout: Cypress.config().global_timeout }).contains(estado).click();
        cy.get(selectCidadde, { timeout: Cypress.config().global_timeout }).click();
        cy.xpath(opcoesCidade, { timeout: Cypress.config().global_timeout }).contains(cidade).click();
        cy.get(radioUnidade, { timeout: Cypress.config().global_timeout }).click();
        cy.get(btnContinuar, { timeout: Cypress.config().global_timeout }).click();
    }

    validaResultadoLocal(cidade) {
        cy.get(resultado(0), { timeout: Cypress.config().global_timeout }).should('contain', cidade);
    }

    validaResultadoModalidade(filtro) {
        cy.get(resultModalidade, { timeout: Cypress.config().global_timeout }).should('contain', filtro)
    }

    validarCidadeNaoExiste(cidade) {
        var pagina = 0;
        for (pagina = 1; pagina <= 3; pagina++) {
            cy.xpath(resultCity(cidade), { timeout: Cypress.config().global_timeout }).should("not.exist")
            if(pagina < 3){
                cy.get(indiceProximo,{ timeout: Cypress.config().global_timeout }).click();
            }            
        }
    }
}
