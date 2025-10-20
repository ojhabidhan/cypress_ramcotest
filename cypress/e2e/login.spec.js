describe('Login Test', () => {
  it('Visits login page', () => {
    cy.visit('https://aimms-sgima.train.tc.canada.ca/extui/hub/')
    cy.get('input[name="User Name"]').type('dmuser')
    cy.get('input[name="Password"]').type('mypassword')
    cy.get('button[type="Login"]').click()
  })
})
