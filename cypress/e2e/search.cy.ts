describe('search products', () => {
  it('should should be able to search for products', () => {
    cy.searchByQuery('moletom')

    cy.url().should('include', '/search')
    cy.location('search').should('include', 'q=moletom')

    cy.get('a[href^="/product"').should('exist')
  })

  it('should not be able search page without a search query', () => {
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')

    cy.url().should('equal', '/')
  })
})
