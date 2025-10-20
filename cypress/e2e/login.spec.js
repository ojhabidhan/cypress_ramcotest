describe('ERP Login Test', () => {
  it('Logs in', () => {
    // Flexible way to type username
   cy.get('[name="ide_username"]').type('dmuser');

    // Flexible way to type password
    cy.contains('Enter Password')
      .parent()
      .find('input')
      .type('TCRamco@2025'); // replace with your password

    // Click login button
    cy.get('button[type="Login"]').click();

    // Verify successful login (adjust according to your ERP)
    cy.contains('Dashboard').should('exist'); // example check
  });
});
