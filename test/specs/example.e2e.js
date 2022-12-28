const LoginPage = require('../pageobjects/login.page').default
const CartPage = require('../pageobjects/cart.page').default

describe('My Landing page of the application', () => {
    it('should validate landing page title', async () => {
        await LoginPage.open();
        await LoginPage.getPageTitle();
    })

    it('Get Footer Links ', async () =>  {
       await LoginPage.footerLinksText();
    })

    it('Accept Cookies and Click Account Button', async () => {
       await LoginPage.acceptCookiesAlert();
    })

    it('Search for product Chritmas and select Christmas Tree', async () => {
       await LoginPage.searchProduct();
    })

    it('Verify Search Page Title has Christmas Trees text', async () => {
       await LoginPage.searchProductTitle();
    })

    it('Verify if user can add a product to cart and verify added product quantity', async () => {
       await CartPage.addProductAndGoToCart();
    })

    it('Get Product Price and Verify Price on changing product quantity', async () =>  {
       await CartPage.getProductPrice();
      })

    it('Click on Account Button Login', async () => {
       await LoginPage.clickAccount();
    })

    it('Login with Invalid Credentials', async () => {
       await LoginPage.invalidSignOn();
    })
})


