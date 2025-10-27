describe('ERP Tests with Session', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
  });

  // Create a login session
  const login = () => {
    cy.visit('/', { timeout: 60000 });
    cy.window().should('have.property', 'Ext');
    cy.get('.x-mask', { timeout: 60000 }).should('not.exist');
    cy.get('input[name="ide_username"]:visible').type('dmuser', { delay: 50 });
    cy.get('input[name="ide_password"]:visible').type('TCRamco@2025', { delay: 50 });
    cy.focused().tab().tab().type('{enter}');
    cy.get('input[placeholder="Activity Search"]:visible', { timeout: 60000 }).should('be.visible');
  };

  it('Logs in correctly', () => {
    cy.session('erpLogin', login); // ✅ define setup here
    cy.session('erpLogin').then(() => {
      cy.log('Login session active');
    });
  });

  it('Navigates to Maintain Invoice screen', () => {
    // Reuse session
    cy.session('erpLogin', login); // ✅ same setup as above
    cy.get('input[placeholder="Activity Search"]:visible', { timeout: 60000 }).should('be.visible');

    cy.contains('Data Migration User', { timeout: 60000 }).should('be.visible');

    cy.get('input[placeholder="Activity Search"]', { timeout: 60000 })
      .click()
      .type('Maintain Invoice', { delay: 100 });

    cy.get('#cmbActSearch-combofield-1095-picker span:nth-of-type(1)', { timeout: 20000 })
      .click();

    cy.contains('Maintain Invoice', { timeout: 60000 }).should('be.visible');
  });
});
