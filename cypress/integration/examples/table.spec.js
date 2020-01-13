const port = Cypress.env('port');

describe('Pruebas a tabla responsiva', () => {
	beforeEach(() => {
		cy.visit(`http://localhost:${port}/`);
	})
	it('Existe el div#app donde se monta la app', () => {
		cy.get('[data-cy="app"]')
			.should('exist');
	})
	it('Existe el CAPTION de la tabla', () => {
		cy.get('[data-cy="table-caption"]')
			.should('exist');
	})
	it('Existe el BODY de la tabla', () => {
		cy.get('[data-cy="table-body"]')
			.should('exist');
	})
	it('Existe el FOOTER de la tabla', () => {
		cy.get('[data-cy="table-footer"]')
			.should('exist');
	})
})