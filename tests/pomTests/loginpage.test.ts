import {test, expect} from "../../config/fixtures";
import * as data from "../../test-data/loginData.json";

test.describe("e2e test demo", async () => {
    test("Verify that user is logged in", async ({baseTest}) => {
    
        await baseTest.loginPage.login("standard_user", "secret_sauce");
        console.log(await baseTest.loginPage.getPageHeading())
    
        expect.soft(await baseTest.loginPage.getPageHeading()).toEqual("Products");
        
    });
    
    test("Add a product to cart", async ({baseTest}) => {
    
        await baseTest.loginPage.login(data.username, data.password);
    
        await baseTest.productPage.selectAProduct(data.product);
    
        await baseTest.singleProductPage.addProductToCart();
    
        const buttonText = await baseTest.singleProductPage.getAddToCartButtonText();
    
        console.log(buttonText);
    
        expect.soft(buttonText).toEqual("Remove");
    
        // await baseTest.page.pause();
    
    });
    
    test("Navigate to cart", async ({baseTest}) => {
        await baseTest.loginPage.login(data.username, data.password);
    
        await baseTest.productPage.selectAProduct(data.product);
    
        await baseTest.singleProductPage.addProductToCart();
    
        await baseTest.singleProductPage.clickOnCartItem();
    
        await baseTest.page.waitForTimeout(5000);
    
    
    });
});

