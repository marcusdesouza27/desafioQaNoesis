/// <reference types="cypress" />

describe("Validar busca por Filmes - via API", () => {
    it("Buscar Filmes", () => {
        cy.fixture("dadosFilme").then((filmes) => {
            cy.request({
                method: 'GET',
                url: `${Cypress.config().urlBase}/?i=${Cypress.config().i}&apikey=${Cypress.config().apikey}`
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.Title).not.be.empty;
                expect(response.body.Title).to.be.eq(filmes.titulo)
                expect(response.body.Language).not.be.empty;
                expect(response.body.Language).to.be.eq(filmes.idioma)
                expect(response.body.Year).not.be.empty;
                expect(response.body.Year).to.be.eq(filmes.ano)
            })
        })        
    })

    it("Buscar Filme Inexistente", () => {
        cy.fixture("dadosFilme").then((filmes) => {
            cy.request({
                method: 'GET',
                url: `${Cypress.config().urlBase}/?i=${Cypress.config().i}999&apikey=${Cypress.config().apikey}`
            }).then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.Response).to.be.eq('False');
                expect(response.body.Error).to.be.eq('Incorrect IMDb ID.');
            })
        })        
    })
})