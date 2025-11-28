describe('Cadastrar Usuario', () => {
  it('tenta criar novo usuario', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')

    const randomEmail = `teste_automatico_${Date.now()}@teste.com`

    cy.get('#input-firstname').type('Teste')
    cy.get('#input-lastname').type('Automatico')
    cy.get('#input-email').type(randomEmail)
    cy.get('#input-telephone').type('11987654321')
    cy.get('#input-password').type('senha_forte_4631@')
    cy.get('#input-confirm').type('senha_forte_4631@')

    cy.get('label[for="input-agree"]').click()

    cy.get('input[type="submit"][value="Continue"]').click()

    cy.contains('Your Account Has Been Created!').should('be.visible')
  })
})