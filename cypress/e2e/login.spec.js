describe('ERP Login Test', () => {
  it('Logs in', () => {
    // Flexible way to type username
    cy.contains('Enter User Name')
      .parent()              // go to parent container
      .find('input')         // find input inside it
      .type('dmuser');       // replace with your username

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
