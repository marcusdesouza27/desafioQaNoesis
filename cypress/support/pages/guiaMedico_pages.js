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

export class GuiaMedico {
    validaPage() {
        cy.get(currentPagebar, { timeout: Cypress.config().global_timeout }).should('contain', 'Guia Médico')
    }
    
    buscaRapida(filtroPesquisa) {
        cy.get(inputPesquisa).type(filtroPesquisa);
        cy.get(btnPesquisar).click();
    }

    validaPesquisaLocalidade() {
        cy.get(localidadeGuiMedico).should('contain', 'Selecione o estado e a cidade para localizar a Unimed onde você deseja ser atendido:');
    }

    buscaLocalidade(estado, cidade) {
        cy.get(selectEstado).click();
        cy.get(conteudoEstado).contains(estado).click();
        cy.get(selectCidadde).click();
        cy.xpath(opcoesCidade).contains(cidade).click();
        cy.get(radioUnidade).click();
        cy.get(btnContinuar).click();
    }

    validaResultadoPesquisa(cidade) {
        cy.get(resultado(0)).should('contain', cidade);
        cy.get(resultado(1)).should('contain', cidade);
        cy.get(resultado(2)).should('contain', cidade);
    }
}
