import HomePageElements from '../elements/HomePageElements';

class HomePage {
    visit() {
        cy.visit('https://demoblaze.com/');
      
    }

    verifyUrl() {
        cy.url().should('eq', 'https://demoblaze.com/');
    }
}

export default HomePage;
