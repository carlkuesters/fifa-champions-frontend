describe('FifaChampionsApp', () => {
  it('should display title', () => {
    cy.visit('/')
    cy.get('.copyright').contains('Copyright © 2023 FIFA-Champions')
  })
})
