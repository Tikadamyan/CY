import HomePageElements from '../elements/HomePageElements';
import LoginPageElements from '../elements/LoginPageElements';
import LogoutElements from '../elements/LogoutElements';

class Logout {
 
    logout() {
        cy.get(LogoutElements.logoutButton).click(); 
        cy.get(HomePageElements.loginButton).should('contain.text', 'Log in'); 
    }
}

export default Logout;
