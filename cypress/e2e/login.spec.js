beforeEach(() => {
  Cypress.on('uncaught:exception', () => false);
});

it('Logs in correctly', () => {
  cy.session('erpLogin', () => {
    cy.visit('/', { timeout: 60000 });
    cy.window().should('have.property', 'Ext');
    cy.get('.x-mask', { timeout: 60000 }).should('not.exist');
    cy.get('input[name="ide_username"]:visible').type('dmuser', { delay: 50 });
    cy.get('input[name="ide_password"]:visible').type('TCRamco@2025', { delay: 50 });
    cy.focused().tab().tab().type('{enter}');
    cy.get('input[placeholder="Activity Search"]').should('be.visible');
  });
});

it('Navigates to Maintain Invoice screen', () => {
  cy.session('erpLogin'); // reuse login session
  cy.contains('Data Migration User').should('be.visible');
  cy.get('input[placeholder="Activity Search"]').click().type('Maintain Invoice', { delay: 100 });
  cy.get('#cmbActSearch-combofield-1095-picker span:nth-of-type(1)').click();
  cy.contains('Maintain Invoice').should('be.visible');
});
