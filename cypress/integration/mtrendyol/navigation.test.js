describe("Navigation", () => {
  it("succesfully loads", () => {
    cy.visit("/")
  })

  it("first list item must have active class on base domain", () => {
    cy.get("nav .navigation li:first").should("have.class", "active")
  })
})

