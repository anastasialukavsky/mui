describe('Pokémon Application E2E Tests', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('http://localhost:5173/');
  });

  it('should display the Pokémon list', () => {
    // Ensure the Pokémon cards are rendered by targeting the Grid items
    cy.get('[data-testid="pokemon-card"]').should('have.length.greaterThan', 0);
  });

  it('should add a Pokémon to My Squad', function () {
    // Ensure the Pokémon cards are rendered
    cy.get('[data-testid="pokemon-card"]').should('have.length.greaterThan', 0);

    // Click the first "Add" button
    cy.get('[data-testid="pokemon-card"]').first().contains('Add').click();

    // Wait for the Pokémon to be added to My Squad
    cy.get('[data-testid="squad-pokemon-card"]').should('have.length', 1);

    // Check that the "Add" button changed to "Remove"
    cy.get('[data-testid="squad-pokemon-card"]').first().contains('Remove');
  });

  it('should remove a Pokémon from My Squad', () => {
    // Add a Pokémon first
    cy.get('[data-testid="pokemon-card"]').first().contains('Add').click();

    // Confirm that the Pokémon has been moved to "My Squad"
    cy.get('[data-testid="squad-pokemon-card"]').should('have.length', 1);

    // Click the "Remove" button in My Squad
    cy.get('[data-testid="squad-pokemon-card"]')
      .first()
      .contains('Remove')
      .click();

    // Check that My Squad is empty again
    cy.get('[data-testid="squad-pokemon-card"]').should('have.length', 0);

    // Check that the Pokémon is back in the main list
    cy.get('[data-testid="pokemon-card"]').first().contains('Add');
  });
});
