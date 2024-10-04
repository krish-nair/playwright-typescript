import { Page } from "@playwright/test";

export default class ProductsPage{
    private url = "https://www.saucedemo.com/inventory.html";
    constructor(private page: Page){}



    async selectAProduct(item: string){
        const products = await this.page.locator("div.inventory_item_label a div").all();

        for(let i = 0; i < products.length; i++){
            const product = products[i];
            const productName = await product.textContent();

            if(productName === item){
                await product.click();
                break;
            }
        }
    }

    async navigateTo(){
        this.page.goto(this.url);
    }
}