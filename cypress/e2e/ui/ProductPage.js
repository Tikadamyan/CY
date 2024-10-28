import ProductPageElements from '../elements/ProductPageElements';

class ProductPage {
    selectNotebookCategory() {
        cy.get(ProductPageElements.notebookCategoryButton).click();
    }

    openProductAddToCart() {
        cy.get(ProductPageElements.sonyVaioProductLink).first().click();
        cy.url().should('eq', 'https://demoblaze.com/prod.html?idp_=8');
        cy.get(ProductPageElements.cartTable).should('contain.text', 'Sony vaio i5');
        cy.get(ProductPageElements.addToCartButton).click();
    }

    goToCartVerifyProduct() {
        cy.get(ProductPageElements.cartLink).click();
        cy.url().should('eq', 'https://demoblaze.com/cart.html');
        cy.get(ProductPageElements.cartTable)
            .find('td')
            .eq(1)
            .should('contain.text', 'Sony vaio i5');
    }

    clear() {
        cy.get(ProductPageElements.cartTable).contains('Delete').click();
        cy.get(ProductPageElements.cartTable).find('td').should('not.exist');
    }
}

export default ProductPage;

