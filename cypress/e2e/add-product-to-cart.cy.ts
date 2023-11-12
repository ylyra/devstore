describe('add product to cart', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to navigate to the product page', () => {
    cy.get('a[href^="/product"').first().click()

    cy.url().should('include', '/product')
    // cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()

    cy.contains('(1)').should('exist')
  })

  it('should not count duplicated products on cart', () => {
    cy.get('a[href^="/product"').first().click()

    cy.url().should('include', '/product')
    // cy.location('pathname').should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('Adicionar ao carrinho').click()

    cy.contains('(1)').should('exist')
  })

  it('should should be able to search for a product and add it to the cart', () => {
    cy.searchByQuery('moletom')

    cy.url().should('include', '/search')

    cy.get('a[href^="/product"').first().click()
    cy.url().should('include', '/product')

    cy.contains('Adicionar ao carrinho').click()
    cy.contains('(1)').should('exist')
  })
})
