describe("Login and Address Section", () => {

  beforeEach(() => {
    Cypress.Cookies.preserveOnce('_TRENDYOL_MBL_Auth')
  })

  it("succesfully loads", () => {
    cy.visit("/")
  })

  it("protocol should be https", () => {
    cy.location("protocol").should("eq", "https:")
  })

  it("should be go to login page", () => {
    cy.get("#header .header__icon-wrapper .header__icon:first a").click()
  })

  it("sign in tabs should be have active class", () => {
    cy.get("#login-register .q-layout.header .header-buttons button").first().should("have.class", "active")
  })

  it("wrong email address or password should be return error message", () => {
    cy.get(".q-layout.login .email-input input[type='email']").type("asdasdqwe@gmail.com")
    cy.get(".q-layout.login .password-wrapper .password input[type='password']").type("asasdasdm")
    cy.get("#login-register .q-layout.login button").should('be.visible').click()
    cy.get("#login-register #error-box-wrapper").should("be.visible")
  })

  it("successfully login and go to address section", () => {
    cy.get(".q-layout.login .password-wrapper .password input[type='password']").clear()
    cy.get(".q-layout.login .email-input input[type='email']").clear()
    cy.get(".q-layout.login .email-input input[type='email']").type("akagamina24@gmail.com")
    cy.get(".q-layout.login .password-wrapper .password input[type='password']").type("maLjW@5rwFz?F3P")
    cy.get("#login-register .q-layout.login button").should('be.visible').click()
    cy.get("#header .header__icon-wrapper .header__icon:first a").click()
    cy.get("#account-menu .q-layout .q-box-group .q-box").within(() => {
      cy.get(".account-box-item .account-box-text").contains("Adres Bilgilerim").click()
    })
  })

  it("when click plus icon modal should be display", () => {
    cy.get("#address .add-address .plus").click()
    cy.get("#address .q-modal-main").should("exist")
  })

  it("address should be adding succesfully", () => {
    cy.get(".q-modal-content .q-box .q-input-wrapper:first input[type='text']").click({ force: true }).type("Home")
    cy.get(".q-modal-content .q-box .grid-input-container .left input[type='text']").click({ force: true }).type("Omer")
    cy.get(".q-modal-content .q-box .grid-input-container .right input[type='text']").click({ force: true }).type("Dogan")
    cy.get(".q-modal-content .q-box input.phone-input").type("547310085")
    cy.get(".q-modal-content .q-box .grid-input-container .left .dropdown select").select("İstanbul")
    cy.get(".q-modal-content .q-box .grid-input-container .right .dropdown select").select("Adalar")
    cy.get(".q-modal-content .q-box form .dropdown:last select").select("Burgazada Mah")
    cy.get(".q-modal-content .q-box .address-text-area ").type("Su mah bu sok o cad")
    cy.get(".q-modal-content button").click()
    cy.get(".q-popup-main .address-creation-success").should("exist")
    cy.get(".q-popup-main .address-creation-success button").click()
  })
})

