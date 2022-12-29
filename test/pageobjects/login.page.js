
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#email-address');
    }

    get inputPassword () {
        return $('#current-password');
    }

    get btnSubmit () {
        return $('//button[contains(text(), "Sign in securely")]');
    }

    get footerLinks () {
       return $$('//div[contains(@class, "Footerstyles")]/ul/li/a');
    }

    get footerLinksText ()  {
       return this.footerLinks.map(async element => {
            console.log(await element.getText());
        });
    }

    get cookiesButton () {
        return $('//button[contains(text(), "Accept All Cookies")]');
    }

    get globalSearchBox () {
        return $('#searchTerm');
     }

    async acceptCookiesAlert () {
        await this.cookiesButton.click();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
        
    }

    async getPageTitle() {
       await expect(browser).toHaveTitle('Argos | Order online today for fast home deliveryy')
    }

    async searchProduct() {
        await this.globalSearchBox.setValue('Christmas');
        let elem = $('//span[contains(text(), "christmas")]//parent::p[1]');
        elem.click();
    }

    async searchProductTitle() {
        const searchPageTitle = await $('//h1[contains(text(), "Christmas trees")]');
        let isDisplayed = await searchPageTitle.isDisplayed();
        console.log("Search Title is displayed as expected: " + isDisplayed);
    }

    async clickAccount() {
        const accountButton = await $('//span[contains(text(), "Account")]');
        await accountButton.click();
    }

    async invalidSignOn() {
        await this.login('myfirsttest@gmail.com', 'invalidpassword@01');
        const invalidLoginErrorMessage = await $('//span[contains(text(), "Sorry")]');
        console.log(await invalidLoginErrorMessage.getText());
    }
    
}

export default new LoginPage();
