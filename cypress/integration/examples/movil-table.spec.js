const port = Cypress.env('port');

describe('Pruebas a tabla responsiva versión MOVIL', () => {
	beforeEach(() => {
		cy.viewport('iphone-6');
		cy.visit(`http://localhost:${port}/`);
	})
	it('Existe el div#app donde se monta la app', () => {
		cy.get('[data-cy="app"]')
			.should('exist');
	})
	it('Existe el CAPTION de la tabla', () => {
		cy.get('[data-cy="table-caption"]')
			.should('exist')
			.should('contain', 'Este es el slot del caption');
	})
	it('Existe el HEAD de la tabla', () => {
		cy.get('[data-cy="table-head"]')
			.should('exist')
			.find('tr')
			.should('have.class', 'columns-movil')
			.children()
			.should('have.length', 3);
	})
	it('Existe el BODY de la tabla', () => {
		cy.get('[data-cy="table-body"]')
			.should('exist')
			.find('tr')
			.should('have.class', 'table-movil')
			.eq(1)
			.children()
			.should('have.length', 5);
	})
	it('Existe el FOOTER de la tabla', () => {
		cy.get('[data-cy="table-footer"]')
			.should('exist')
			.should('contain', 'Este es el slot del footer');
	})
})