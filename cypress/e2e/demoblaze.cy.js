import HomePage from './ui/HomePage';
import LoginPage from './ui/LoginPage';
import ProductPage from './ui/ProductPage';
import Logout from './ui/Logout';

describe('DemoBlaze URL and Login Test', () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const productPage = new ProductPage();
    const logout = new Logout(); 

    it('Should load the correct page URL and perform login', () => {
        homePage.visit();
        homePage.verifyUrl();
        loginPage.openLoginModal();
        loginPage.login('Tik', 'Tik11');
        loginPage.verifyPageAfterLogin();
        productPage.openProductAddToCart();
        productPage.goToCartVerifyProduct();
        productPage.clear(); 
        logout.logout(); 
    });
});
