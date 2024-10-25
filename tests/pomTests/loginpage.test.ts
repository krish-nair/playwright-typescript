import {test, expect} from "../../pages/base.page";
import * as data from "../../test-data/loginData.json";

test.describe("e2e test demo", async () => {
    test("Verify that user is logged in", async ({loginPage}) => {
    
        await loginPage.login("standard_user", "secret_sauce");
        console.log(await loginPage.getPageHeading())
    
        expect.soft(await loginPage.getPageHeading()).toEqual("Products");
        
    });
    
    test.only("Add a product to cart", async ({
        loginPage,
        productsPage,
        singleProductPage
    }) => {
    
        await loginPage.login(data.username, data.password);
    
        await productsPage.selectAProduct(data.product);
    
        await singleProductPage.addProductToCart();
    
        const buttonText = await singleProductPage.getAddToCartButtonText();
    
        console.log(buttonText);
    
        expect.soft(buttonText).toEqual("Remove");
    
        // await baseTest.page.pause();
    
    });
    
    // test("Navigate to cart and verify product is added", async ({baseTest}) => {
    //     await baseTest.loginPage.login(data.username, data.password);
    
    //     await baseTest.productPage.selectAProduct(data.product);
    
    //     await baseTest.singleProductPage.addProductToCart();
    
    //     await baseTest.singleProductPage.clickOnCartItem();

    //     console.log(await baseTest.cartPage.isProductAdded());
        
    //     expect.soft(await baseTest.cartPage.isProductAdded()).toBeTruthy();

    //     await baseTest.cartPage.clickChekoutButton();

    //     expect(await baseTest.checkoutPage.getCheckoutPageHeading()).toEqual("Checkout: Your Information");
        
    //     await baseTest.page.pause();

    // });
});

