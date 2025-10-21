describe('ERP Login Test', () => {
  it('Logs in', () => {
    // Flexible way to type username
   cy.get('input[placeholder="User Name"]').type('dmuser');

    // Flexible way to type password
    cy.get('input[data-componentid*="ide_password-textfield-"]').type('TCRamco@2025'); // replace with your password

    // Click login button
    cy.get('button[type="Login"]').click();

    // Verify successful login (adjust according to your ERP)
    cy.contains('Dashboard').should('exist'); // example check
  });
});
