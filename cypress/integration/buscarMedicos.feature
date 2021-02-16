Feature: Consultar Medicos

    Como usuario desejo efetuar busca de servicos medicos no site da Unimed

    Background: Home Page
    Given usuario esta na homepage da unimed

@focus @guiaMedicoRiodeJaneiro
    Scenario: Buscar medicos
        When usuario efetua uma pesquisa de medicos do Rio de Janeiro
        Then sera exibida uma lista de medicos disponiveis na area buscada

@buscaLocalidade
    Scenario: Validar Filtro por Localidade