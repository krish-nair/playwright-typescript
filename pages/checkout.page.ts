import { Locator, Page } from "@playwright/test";

export default class CheckoutPage{
    private checkoutPageTitle: Locator = this.page.locator("span.title");

    constructor(private page: Page){}

    async getCheckoutPageHeading(): Promise<string>{
        return await this.checkoutPageTitle.innerText();
    }
}