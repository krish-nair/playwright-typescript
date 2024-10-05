import { Locator, Page } from "@playwright/test";

export default class CartPage{
    private cartPageHeading: Locator = this.page.locator("span.title");

    constructor(private page: Page){}

    async getCartPageHeading(): Promise<string>{
        await this.cartPageHeading.waitFor({state: "visible"});
        return await this.cartPageHeading.innerText();
    }
    
}