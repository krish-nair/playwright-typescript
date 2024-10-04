import { expect, test } from "@playwright/test";
import LoginPage from "../../pages/login.page";
import ProductsPage from "../../pages/products.page";

test("Login to sauce demo", async ({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateTo();
    await loginPage.login("standard_user", "secret_sauce");

    console.log(await loginPage.getPageHeading())

    expect.soft(await loginPage.getPageHeading()).toEqual("Products");

    const productPage = new ProductsPage(page);

    await productPage.selectAProduct("Test.allTheThings() T-Shirt (Red)");
    await page.waitForTimeout(5000);
});