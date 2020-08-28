describe("Search Bar", () => {
  it("succesfully loads", () => {
    cy.visit("/")

  })

  it("is search modal opening?", () => {
    cy.get("#search-autofill .search-autofill__input").click()
    cy.get("#search .q-modal-main").should("be.visible")
  })

  it("search input should be focused", () => {
    cy.get("#search .q-modal-main .search-panel__input").should("have.focus")
  })

  it("is search modal closing?", () => {
    cy.get("#search .q-modal-main .search-panel__icon").click()
    cy.get("#search .q-modal-main").should("not.be.visible")
  })
})

