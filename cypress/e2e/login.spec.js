describe('ERP Login Test (auto-detect fields)', () => {
  it('Finds login fields and logs in', () => {
    cy.visit("/");
    cy.wait(30000);
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

    let usernameFound = false;
    let passwordFound = false;
    let loginFound = false;

    // --- Find and type username ---
    cy.get('body').then(($body) => {
      for (const sel of usernameSelectors) {
        if ($body.find(sel).length > 0) {
          cy.log(`✅ Username field found with selector: ${sel}`);
          cy.get(sel).type('dmuser', { delay: 50 });
          usernameFound = true;
          break;
        }
      }
      if (!usernameFound) throw new Error('❌ No username field found.');
    });

    // --- Find and type password ---
    cy.get('body').then(($body) => {
      for (const sel of passwordSelectors) {
        if ($body.find(sel).length > 0) {
          cy.log(`✅ Password field found with selector: ${sel}`);
          cy.get(sel).type('TCRamco@2025', { delay: 50 });
          passwordFound = true;
          break;
        }
      }
      if (!passwordFound) throw new Error('❌ No password field found.');
    });

    // --- Find and click login button ---
    cy.get('body').then(($body) => {
      for (const sel of loginButtonSelectors) {
        if ($body.find(sel).length > 0) {
          cy.log(`✅ Login button found with selector: ${sel}`);
          cy.get(sel).click({ force: true });
          loginFound = true;
          break;
        }
      }
      if (!loginFound) throw new Error('❌ No login button found.');
    });

    // --- Verify login success (adjust this) ---
    cy.contains('Dashboard', { timeout: 10000 }).should('exist');
  });
});
