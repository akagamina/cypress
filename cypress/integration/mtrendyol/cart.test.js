describe("Cart", () => {
  it("succesfully loads", () => {
    cy.visit("/")
  })

  it("select category and product", () => {
    cy.get("#boutique-list .boutique:first").click()
    cy.get("#search-result-new ul li:first a").click()
  })

  it("product should have title", () => {
    cy.get("#product-detail-new .product_info a").should('exist')
  })

  it("product should have description", () => {
    cy.get("#product-detail-new .product_info .product_info__product_name").should('exist')
  })

  it("should be click add to cart button and product size section should be visible", () => {
    cy.get("#product-detail-new .price button").click()
    cy.get(".q-bottom-sheet-main").should("be.visible")
  })

  it("the warning should be displayed when size not have been selected", () => {
    cy.get(".q-bottom-sheet-main .size__button").click()
    cy.get(".q-bottom-sheet-main .size__variant--last-option").should("exist")
  })

  it("the warning should be disapear when size have been selected", () => {
    cy.get(".q-bottom-sheet-main .size__variant .size__cell:first").click()
    cy.get(".q-bottom-sheet-main .size__variant--last-option").should("not.exist")
  })

  it("the price which is showing bottomsheet should be exactly same as inside basket cart", () => {
    cy.get(".q-bottom-sheet-main .size-product__info--price .discount--price span:first").invoke("text").then(price => {
      cy.get(".q-bottom-sheet-main .size__button").click()
      cy.get(".basket-card .bottom-prices-wrapper .sale-price").invoke("text").then(salePrice => {

        const extractString = (str) => str.replace(/\D/g, "")
        expect(extractString(price)).to.eq(extractString(salePrice))
      })
    })
  })

  it("if product is delete modal should be shown", () => {
    cy.get("#basket .content .q-icon.remove").click()

  })

  it("if delete button click then product should be removed from basket cart", () => {
    cy.get(".q-popup-main .basket__confirm-button-wrapper button").eq(1).click()
  })


  // it("the shopping cart should be display count how many products it has chosen", () => {
  //   cy.reload()
  // })
})

