import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    async addProductAndGoToCart() {
        const addToCart = await $('//span[contains(text(), "Add")]/parent::span/span');
        await  addToCart.click();
        const goToTrolley = await $('//a[contains(text(), "Go to trolley")]');
        await goToTrolley.click();
        const productQuantity = await $('//select[@data-e2e="product-quantity"]/option[@selected]');
        console.log("Product Quantity is: " + productQuantity.getText());
    }

    async getProductPrice() {
    const productPrice = await $('//span[@data-e2e="product-line-price"]');
    console.log(await productPrice.getText());
    }
}

export default new CartPage();