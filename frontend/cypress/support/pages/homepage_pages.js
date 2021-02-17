const menuSistemaUnimed = '//li[@class="link_to_layout"]/a[contains(.,"Sistema Unimed")]'
const menuGuiaMedico = 'a[href="https://www.unimed.coop.br/web/guest/guia-medico"]'
const menuViverBem = '//li[@class="portlet"]/a[contains(.,"Viver Bem")]'
const menuFaleComaUnimed = '//li[@class="portlet"]/a[contains(.,"Fale com a Unimed")]'
const menuPlanos = '//li[@class="portlet"]/a[contains(.,"Planos")]'
const menuImprensa = '//li[@class="portlet"]/a[contains(.,"Imprensa")]'
const menuFaculdadeUnimed = '//li[@class="url"]/a[contains(.,"Faculdade Unimed")]'
const btnLogin = '#btnFazerLogin'

export class HomePage {

    loadHomepage(){
        cy.visit('/')
    }

    loadGuiaMedico(){
        cy.get(menuGuiaMedico).click();
    }
}
