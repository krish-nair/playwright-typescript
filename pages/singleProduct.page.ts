import { Locator, Page } from "@playwright/test";

export default class SingleProductPage{
    private addToCartButton: Locator = this.page.locator("button.btn_inventory"); 
    private itemQuantityInCartIcon: Locator = this.page.locator("a.shopping_cart_link span");

    constructor(private page: Page){}

    async clickOnCartItem(): Promise<void>{
        let isItemAdded = false;
        await this.itemQuantityInCartIcon.waitFor({state: "visible"});
        isItemAdded = await this.itemQuantityInCartIcon.isVisible();
        if(isItemAdded){
            this.itemQuantityInCartIcon.click();
        }else {
            console.log("item not added to the cart!");
        }
    }

    async getAddToCartButtonText(): Promise<string>{
        await this.addToCartButton.waitFor({state: "visible"});
        return await this.addToCartButton.innerText();
    }

    async addProductToCart(): Promise<void>{
        await this.addToCartButton.waitFor({state: "visible"})
        await this.addToCartButton.click();
    }
}