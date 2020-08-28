describe("Visit m.trendyol.com", () => {

  it("succesfully request", () => {
    const successStatus = 200

    cy.request("/").then(response => {
      expect(response.status).to.equal(successStatus)
    })
  })

  it("succesfully loads", () => {
    cy.visit("/")
  })
})

