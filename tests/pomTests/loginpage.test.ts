import {test, expect} from "../../config/fixtures";

test("Verify that user is logged in", async ({baseTest}) => {
    
    await baseTest.loginPage.login("standard_user", "secret_sauce");
    console.log(await baseTest.loginPage.getPageHeading())

    expect.soft(await baseTest.loginPage.getPageHeading()).toEqual("Products");
    
});

test("Add a product to cart", async ({baseTest}) => {

    await baseTest.loginPage.login("standard_user", "secret_sauce");

    await baseTest.productPage.selectAProduct("Test.allTheThings() T-Shirt (Red)");

    await baseTest.singleProductPage.addProductToCart();

    const buttonText = await baseTest.singleProductPage.getAddToCartButtonText();

    console.log(buttonText);

    expect.soft(buttonText).toEqual("Remove");

    // await baseTest.page.pause();

});

test.only("Navigate to cart", async ({baseTest}) => {
    await baseTest.loginPage.login("standard_user", "secret_sauce");

    await baseTest.productPage.selectAProduct("Test.allTheThings() T-Shirt (Red)");

    await baseTest.singleProductPage.addProductToCart();

    await baseTest.cartPage.clickOnCartItem();

    await baseTest.page.waitForTimeout(5000);


})