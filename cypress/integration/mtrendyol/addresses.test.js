describe("Login, add and delete address", () => {

  before(() => {
    cy.clearCookies()
    cy.signIn({ email: "akagamina24@gmail.com", password: "maLjW@5rwFz?F3P" })
  })

  beforeEach(() => {
    Cypress.Cookies.preserveOnce('_TRENDYOL_MBL_Auth')
  })

  it("go to address section", () => {
    cy.get("#header .header__icon-wrapper .header__icon:first a").click()
    cy.get("#account-menu .q-layout .q-box-group .q-box").within(() => {
      cy.get(".account-box-item .account-box-text").contains("Adres Bilgilerim").click()
    })
  })

  it("when click plus icon modal should be display", () => {
    cy.get("#address .add-address .plus").click()
    cy.get("#address .q-modal-main").should("exist")
  })

  it("address should be add succesfully", () => {
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

  it("address should be delete succesfully", () => {
    cy.get(".address:first .q-badge > div").contains("Düzenle").click()
    cy.get(".q-modal-main .q-modal-content button:last").click()
  })
})

