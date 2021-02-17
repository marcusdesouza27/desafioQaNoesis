Feature: Consultar Medicos

    Como usuario desejo efetuar busca de servicos medicos no site da Unimed

    Background: Home Page
    Given usuario esta na homepage da unimed

@guiaMedicoRiodeJaneiro
    Scenario: Buscar medicos
        When usuario efetua uma pesquisa de medicos do Rio de Janeiro
        Then sera exibida uma lista de medicos disponiveis na area buscada

@buscaLocalidade
    Scenario: Validar Filtro por Localidade
    When usuario efetua uma pesquisa de medicos do Rio de Janeiro
    Then nao deve exibir a cidade Sao Paulo nas paginas de 1 a 3