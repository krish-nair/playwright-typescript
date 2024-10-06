import { Locator, Page } from "@playwright/test";

export default class CartPage{
    private cartPageHeading: Locator = this.page.locator("span.title");
    private productInCart: Locator = this.page.locator("div.inventory_item_name");
    private checkoutButton: Locator = this.page.locator("button#checkout");

    constructor(private page: Page){}

    async clickChekoutButton(): Promise<void>{
        await this.checkoutButton.click();
    }

    async isProductAdded(): Promise<boolean>{
        await this.productInCart.waitFor({state: "visible"});
        return await this.productInCart.isVisible();
    }

    async getCartPageHeading(): Promise<string>{
        await this.cartPageHeading.waitFor({state: "visible"});
        return await this.cartPageHeading.innerText();
    }
    
}