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
    let address = {
      title: "home",
      name: "omer",
      surname: "dogan",
      phone: "547310085",
      city: "İstanbul",
      district: "Adalar",
      neighborhood: "Burgazada Mah",
      fullAdress: "Bu cad su sok no:3"
    }
    cy.addAdress(address)
  })

  it("address should be edit succesfully", () => {
    cy.get(".address:first .q-badge > div").contains("Düzenle").click()
    cy.get("#address .q-modal-main").should("exist")
    cy.wait(2000)
    cy.get(".q-modal-content .q-box .q-input-wrapper:first input[type='text']").click({ force: true }).type("2")
    cy.get(".q-modal-content button").first().click()
    cy.get(".q-popup-main .address-creation-success .title").contains("ADRESİNİZ GÜNCELLENDİ").should("exist")
    cy.get(".q-popup-main .address-creation-success .creation-modal-button").contains("Tamam").should("exist").click()
  })

  it('new address can be add succesfully', () => {
    cy.get("#address .add-address .plus").click()
    cy.get("#address .q-modal-main").should("exist")

    let address = {
      title: "work",
      name: "erdogan",
      surname: "oksuz",
      phone: "547212065",
      city: "Rize",
      district: "Ardeşen",
      neighborhood: "Arıcılar Köyü",
      fullAdress: "usagım sok. o caddesi"
    }

    cy.addAdress(address)
  })

  it("address should be delete succesfully", () => {
    cy.get(".address:first .q-badge > div").contains("Düzenle").click()
    cy.get(".q-modal-main .q-modal-content button:last").click()
  })
})

