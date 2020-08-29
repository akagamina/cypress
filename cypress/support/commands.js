Cypress.Commands.add("signIn", (user) => {
  cy.visit("/")
  cy.location("protocol").should("eq", "https:")
  cy.get("#header .header__icon-wrapper .header__icon:first a").click()
  cy.get("form").within(() => {
    cy.get("input[type='email']").type(user.email)
    cy.get("input[type='password']").type(user.password)
    cy.root().submit()
  })
})