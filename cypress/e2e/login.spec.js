// cypress/e2e/erp_login.cy.js

describe('ERP Login Test (auto-detect fields)', () => {
  beforeEach(() => {
    // Visit base URL defined in cypress.config.js
    cy.visit('/', { timeout: 60000 });

    // Wait until page structure stabilizes (optional)
    cy.get('body', { timeout: 60000 }).should('exist');
  });

  it('Finds login fields dynamically and logs in', () => {
    const usernameSelectors = [
      'input[data-componentid*="ide_username-textfield-"]',
      'input[name="ide_username"]',
      'input[placeholder="User Name"]',
      'input.x-form-focus',
      'input.x-field-form-focus',
      'input.x-field-default-form-focus',
      'div[id*="ide_username-textfield-"] input',
      'div[data-id="ide_username"] input',
      'div[name="ide_username_textfield"] input',
      'div[itemid="ide_username"] input',
      'div[placeholder="Enter User Name"] input',
      'div.x-form-text-wrap-focus input',
      'div.x-form-trigger-wrap-focus input',
      'div.custusername input',
      'div.x-field-focus input',
      'div.username input',
      'div.mb-four-s input'
    ];

    const passwordSelectors = [
      'input[data-componentid*="ide_password-textfield-"]',
      'input[name="ide_password"]',
      'input[type="password"]',
      'div[itemid*="password"] input',
      'div[data-id*="password"] input',
      'div.x-form-trigger-wrap-focus input[type="password"]'
    ];

    const loginButtonSelectors = [
      'button[type="submit"]',
      'button[type="Login"]',
      'button:contains("Login")',
      'div.login button',
      'span:contains("Login")',
      'div.x-btn-inner:contains("Login")'
    ];

    // --- Wait and type username ---
    cy.get(usernameSelectors.join(','), { timeout: 60000 })
      .should('be.visible')
      .first()
      .type('dmuser', { delay: 50 });

    // --- Wait and type password ---
    cy.get(passwordSelectors.join(','), { timeout: 60000 })
      .should('be.visible')
      .first()
      .type('TCRamco@2025', { delay: 50 });

    // --- Wait and click Login ---
    cy.get(loginButtonSelectors.join(','), { timeout: 60000 })
      .should('be.visible')
      .first()
      .click({ force: true });

    // --- Verify login success (adjust keyword as needed) ---
    cy.contains('Dashboard', { timeout: 60000 }).should('exist');
  });
});
