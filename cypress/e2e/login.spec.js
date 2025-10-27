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

    // Tab twice to move to login button, then press Enter
    cy.focused().tab().tab().type('{enter}');

    // Verify if loggedin
    cy.get('input[placeholder="Activity Search"]', { timeout: 60000 }).should('be.visible');
  });
});

  it('Navigates to Maintain Invoice screen', () => {
    // Step 1: Confirm dashboard/home is ready
    cy.contains('Data Migration User', { timeout: 60000 }).should('be.visible');

    // Step 2: Search and open “Maintain Invoice”
    cy.get('input[placeholder="Activity Search"]', { timeout: 60000 })
      .click()
      .type('Maintain Invoice', { delay: 100 });

    // Wait for dropdown results and click first result
    cy.get('#cmbActSearch-combofield-1095-picker span:nth-of-type(1)', { timeout: 20000 })
      .click();

    // Step 3: Confirm that the screen loaded
    cy.contains('Maintain Invoice', { timeout: 60000 }).should('be.visible');
  });
});
