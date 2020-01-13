const port = Cypress.env('port');

describe('Pruebas a tabla responsiva', () => {
	beforeEach(() => {
		cy.visit(`http://localhost:${port}/`);
	})
	it('Iniciando pruebas', () => {
		cy.get('[data-cy="app"]')
			.should('exist');
	})
})