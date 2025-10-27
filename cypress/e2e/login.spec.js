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
      .type('TCRamco@2025{tab}{tab}{enter}', { delay: 50 });

    // Verify dashboard
    cy.contains('Dashboard', { timeout: 60000 }).should('exist');
  });
});
