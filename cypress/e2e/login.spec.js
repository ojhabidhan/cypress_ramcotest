describe('ERP Login Test (auto-detect fields)', () => {
  it('Finds login fields and logs in', () => {
    cy.visit('/');

    // Wait for page to actually render login form (up to 60s)
    cy.get('body', { timeout: 60000 }).should('exist');

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

    // Custom helper function to find the first visible element matching any selector
    function findAndType(selectors, text) {
      for (const sel of selectors) {
        cy.get('body').then(($body) => {
          if ($body.find(sel).length > 0) {
            cy.log(`✅ Found field with selector: ${sel}`);
            cy.get(sel, { timeout: 20000 }).should('be.visible').type(text, { delay: 50 });
            return false; // stop loop
          }
        });
      }
    }

    // Wait until any username field appears
    cy.get(usernameSelectors.join(','), { timeout: 60000 })
      .should('be.visible')
      .first()
      .type('dmuser', { delay: 50 });

    cy.get(passwordSelectors.join(','), { timeout: 60000 })
      .should('be.visible')
      .first()
      .type('TCRamco@2025', { delay: 50 });

    cy.get(loginButtonSelectors.join(','), { timeout: 60000 })
      .should('be.visible')
      .first()
      .click({ force: true });

    // Check for successful login (adjust selector/text)
    cy.contains('Dashboard', { timeout: 20000 }).should('exist');
  });
});
