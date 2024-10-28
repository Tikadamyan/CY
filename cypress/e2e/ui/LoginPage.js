import LoginPageElements from '../elements/LoginPageElements';
import HomePageElements from '../elements/HomePageElements';
import LogoutElements from '../elements/LogoutElements';

class LoginPage {
    openLoginModal() {
        cy.get(HomePageElements.loginButton).click();
        cy.get(LoginPageElements.loginModalLabel).should('be.visible');
    }

    login(username, password) {
        cy.get(LoginPageElements.usernameField).type(username);
        cy.get(LoginPageElements.passwordField).type(password);
        cy.get(LoginPageElements.loginSubmitButton).click();
    }

    verifyPageAfterLogin() {
        cy.get(LoginPageElements.navbar).should('be.visible');
        cy.get(LoginPageElements.usernameDisplay).should('contain.text', 'Welcome');
        cy.get(LogoutElements.logoutButton).should('be.visible').and('contain.text', 'Log out');
        cy.get(LoginPageElements.loginModal).should('not.be.visible');
    }
}

export default LoginPage;

