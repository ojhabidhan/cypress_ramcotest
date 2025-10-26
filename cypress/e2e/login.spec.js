describe('ERP Login Test', () => {
  it('Logs in correctly', () => {
    cy.visit('/', { timeout: 60000 });

    // Wait for any loading mask to disappear (ERP-specific)
    cy.get('.x-mask', { timeout: 60000 }).should('not.exist');

    // Wait for username and password fields to be visible and enabled
    cy.get('input[name="ide_username"]:visible', { timeout: 60000 })
      .should('be.enabled')
      .type('dmuser', { delay: 50 });

    cy.get('input[name="ide_password"]:visible', { timeout: 60000 })
      .should('be.enabled')
      .type('TCRamco@2025', { delay: 50 });

    // Click login button
    cy.get('button[type="submit"]:visible', { timeout: 60000 })
      .should('be.enabled')
      .click();

    // Verify dashboard appears
    cy.contains('Dashboard', { timeout: 60000 }).should('exist');
  });
});
