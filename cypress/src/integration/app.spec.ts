export const app =
  'Step: ' +
  Cypress.config()
    .integrationFolder.split('\\')
    .find(pathSegment => /[0-9]/.test(pathSegment));

describe(app, () => {
  before(() => {
    cy.visit('/');
  });

  it('should load without error', () => {
    // This just works
  });

  it('should display a proper heading', () => {
    cy.get('.brand-logo').contains('Preparation and Introduction');
  });
});
