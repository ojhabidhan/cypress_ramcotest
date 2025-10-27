describe('ERP Login Test', () => {

  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
  });

  it('Logs in correctly', () => {
    cy.visit('/', { timeout: 60000 });
    cy.window().should('have.property', 'Ext'); // wait for ExtJS to load

    // Wait for any loading mask to disappear
    cy.get('.x-mask', { timeout: 60000 }).should('not.exist');

    // Username and password fields
    cy.get('input[name="ide_username"]:visible', { timeout: 60000 })
      .should('be.enabled')
      .type('dmuser', { delay: 50 });

    cy.get('input[name="ide_password"]:visible', { timeout: 60000 })
      .should('be.enabled')
      .type('TCRamco@2025', { delay: 50 });

    // Tab twice to reach the login button, then press Enter
    cy.focused()
      .tab()   // move focus once
      .tab()   // move focus again
      .type('{enter}');  // trigger click on the focused element (login)

    // Verify dashboard
    cy.contains('Dashboard', { timeout: 60000 }).should('exist');
  });
});
