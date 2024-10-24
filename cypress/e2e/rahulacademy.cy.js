describe('Test rahulshettyacademy page', () => {
    it('Checking the shopping process ', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.url().should('eq', 'https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-form input').type('Brocolli');
        cy.get('.products-wrapper .product')
            .should('have.length', 1)
            .then(($product) => {
                cy.wrap($product)
                    .should('contain.text', 'Brocolli')
                    .and('be.visible');
                cy.wrap($product).find('.quantity')
                    .should('have.value', '1')
                    .then(() => {
                        cy.wrap($product).find('.increment').dblclick();
                    });
                cy.wrap($product).find('.quantity').should('have.value', '3');
                cy.wrap($product).find('[type="button"]').click().should('have.text', '✔ ADDED');
            })
        cy.get('.cart-icon').click();
        cy.get('.cart-preview')
            .should('be.visible')
            .then(($cart) => {//
                cy.wrap($cart).should('contain.text', 'Brocolli');
                cy.wrap($cart).find('.product-total .quantity')
                    .should('contain.text', '3 Nos.');
                cy.wrap($cart).find('.product-total .amount')
                    .should('contain.text', '360');
                cy.wrap($cart).find('button').click();
            });
        cy.get('#productCartTables tbody tr')
            .should('be.visible')
            .within(() => {
                cy.get('.product-name')
                    .should('contain.text', 'Brocolli');
            });
        cy.get('.promoWrapper').then(($promoWrapper) => {
            cy.wrap($promoWrapper).find('.promoCode').type('test');
            cy.wrap($promoWrapper).find('.promoBtn').click();
            cy.wait(2000);
            cy.wrap($promoWrapper).find('.promoInfo').should('be.visible').and('contain.text', 'Invalid code ..!');
        });
        cy.get('.products-wrapper').find('button').last().click();
        cy.get('.wrapperTwo').should('be.visible').then(($wrapper) => {
            cy.wrap($wrapper).find('select')
                .should('be.visible')
                .select('Armenia')
                .should('have.value', 'Armenia');
            cy.wrap($wrapper).find('.chkAgree').click();
            cy.wrap($wrapper).find('button').last().click();
            cy.wrap($wrapper)
                .should('contain.text', 'Thank you, your order has been placed successfully')
                .and('contain.text', "You'll be redirected to Home page shortly!!");
        });

    });
});



